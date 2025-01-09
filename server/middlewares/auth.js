import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized. Please login again!",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id; // adding userId key-value to the req.body
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Please login again!",
      });
    }
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default userAuth;
