import Jwt from "jsonwebtoken";
import User from "../models/user-model.js";
import createError from "http-errors";

const protect = async (req, res, next) => {
  let token =
    req.headers.authorization && req.headers.authorization.startsWith("Bearer");

  if (token) {
    // console.log("Token found");

    try {
      const decoded = Jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET
      );
      // console.log(decoded)
      req.user = await User.findById(decoded.id).select('-password');
    //   res.send(req.user)
    } catch (error) {
      next(error);
    }
  }

  if (!token) {
    next(createError(401, "Not authorized, no token."));
  }

  next();
};

export default protect;
