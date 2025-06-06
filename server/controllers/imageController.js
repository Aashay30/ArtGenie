import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body; // prompt from body and userId from headers by middleware token
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({
        success: false,
        message: "Missing details",
      });
    }
    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.error("Error occurred:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
    });
    res.json({
      success: false,
      message: error.message,
      details: error.response?.data,
    });
  }
};

export default generateImage;
