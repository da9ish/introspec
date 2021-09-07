import jwt from "jsonwebtoken"
import prismaClient from "@prisma/client"
const prisma = new prismaClient.PrismaClient();

const config = process.env;

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const { email } = jwt.verify(token, config.TOKEN_KEY);
    const user = await prisma.user.findUnique({ where: { email } })
    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken