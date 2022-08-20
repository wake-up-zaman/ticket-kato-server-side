import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).send({ message: 'unauthorized access' })
    }
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
      if (err) {
        return res.status(403).send({ message: 'Forbidden access' })
      }
      req.decoded = decoded
      next()
    });
  }
  