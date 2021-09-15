import express from "express"
import prismaClient from "@prisma/client"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import cors from 'cors'
import fetch from 'node-fetch'
import auth from './auth.js'
import { getIntrospectionQuery } from "graphql"
const prisma = new prismaClient.PrismaClient();
const app = express();

app.use(cors())
app.use(express.json())

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email: email } })

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      user.token = token

      return res.status(200).json({
        success: true,
        message: "Login Success",
        error: null,
        data: user
      });
    }

    return res.status(400).send({
      success: false,
      message: "Invalid Credentials",
      error: {
        statusCode: 400,
        message: "Email and password don't match",
      },
      data: null
    });

  } catch (e) {
    console.log(e)
    return res.status(500).send({
      success: false,
      message: "Server Error",
      error: {
        statusCode: 500,
        message: "Something went wrong",
      },
      data: null
    });
  }
})

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const oldUser = await prisma.user.findUnique({ where: { email: email } });

    if (oldUser) {
      return res.status(409).json({
        success: true,
        message: "Signup failed",
        error: {
          statusCode: 409,
          message: "User Already Exist. Please Login"
        },
        data: null
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const token = jwt.sign(
      { email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: encryptedPassword,
      }
    });

    user.token = token

    res.status(201).json({
      success: true,
      message: "Account Created",
      error: null,
      data: user
    });
  } catch (e) {
    console.log(e)
    res.status(500).send({
      success: false,
      message: "Server Error",
      error: {
        statusCode: 500,
        message: "Something went wrong",
      },
      data: null
    });
  }
})

app.get('/session', async (req, res) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      success: "false",
      message: "Invalid Token",
      error: {
        statusCode: 403,
        message: "A token is required for authentication",
      },
      data: null
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const { email } = decoded;
    const user = await prisma.user.findUnique({ where: { email } })
    res.status(200).json({
      success: "true",
      message: "Session Created",
      error: null,
      data: user
    });
  } catch (err) {
    return res.status(401).json({
      success: "false",
      message: "Invalid Token",
      error: {
        statusCode: 403,
        message: "Unable to decode token",
      },
      data: null
    });
  }
})

app.get('/projects', auth, async (req, res) => {
  const { id } = req.user;
  const projects = await prisma.project.findMany({ where: { ownerId: id } })

  res.status(200).json({
    success: true,
    message: "",
    error: null,
    data: projects
  });
})

app.get('/project/:id', auth, async (req, res) => {
  const project = await prisma.project.findUnique({
    where: { id: Number.parseInt(req.params.id) }
  })

  res.status(200).json({
    success: true,
    message: "",
    error: null,
    data: project
  });
})

app.post('/project/new', auth, async (req, res) => {
  const { id } = req.user;

  const {
    name,
    description,
    apiEndpoint,
    visibility,
    apiConfig,
    themeConfig,
    domainConfig
  } = req.body

  const project = await prisma.project.create({
    data: {
      name,
      description,
      apiEndpoint,
      visibility,
      apiConfig,
      themeConfig,
      domainConfig,
      status: 'Draft',
      ownerId: id
    }
  })

  res.status(201).json({
    success: true,
    message: "Project created",
    error: null,
    data: project
  });
})

app.get('/docs/:id', auth, async (req, res) => {
  const project = await prisma.project.findUnique({
    where: { id: Number.parseInt(req.params.id) }
  })

  const schema = await fetch(project.apiEndpoint, {
    headers: {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    referrer: "http://localhost:6500",
    referrerPolicy: "strict-origin-when-cross-origin",
    mode: "cors",
    credentials: "omit",
    method: "POST",
    body: JSON.stringify({
      operationName: "IntrospectionQuery",
      query: getIntrospectionQuery()
    })
  }).then(res => res.json()).catch(e => console.log(e))

  res.status(200).json({
    success: true,
    message: "",
    error: null,
    data: {
      ...project,
      schema: schema
    }
  });
})

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

app.listen(6500, () => {
  console.log(`Server running on port 6500`);
});