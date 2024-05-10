import Express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import pdfToAudioRoute from "./routes/pdfToAudioRoute.js";
import askOpenaiRoute from "./routes/askOpenaiRoute.js";
import loginRoute from "./routes/loginRoutes.js";
import cors from "cors";

const app = Express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/book", bookRoutes);
app.use("/api", pdfToAudioRoute);
app.use("/api", askOpenaiRoute);
app.use("", loginRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
