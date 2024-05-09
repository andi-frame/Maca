import mongoose from "mongoose";

const Schema = mongoose.Schema;

const loginSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LoginModel = new mongoose.model("LoginModel", loginSchema);
export default LoginModel;
