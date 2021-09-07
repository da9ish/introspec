const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
// const auth = require("./auth");
const cors = require('cors')
const prisma = new PrismaClient();
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

      user.token = token;

      res.status(200).json(user);
    }

    res.status(400).send({ message: "Invalid Credentials" });
  } catch (e) {
    console.log(e)
    res.status(500).send({ message: "Server Error" });
  }
})

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const oldUser = await prisma.user.findUnique({ where: { email: email } });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
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
        token,
        email: email.toLowerCase(),
        password: encryptedPassword,
      }
    });

    res.status(201).json({ user });
  } catch (e) {
    console.log(e)
    res.status(500).send("Server Error");
  }
})

app.listen(6500, () => {
  console.log(`Server running on port 6500`);
});