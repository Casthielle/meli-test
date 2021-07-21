import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
const app = express();
config();

// settings
app.set("port", process.env.PORT || 8081);
app.set("json spaces", 2);

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("build"));

// api
app.use("/api", require("./routes/api"));

// ssr
app.use("*", require("./routes/ssr"));


app.listen(app.get("port"), () =>
  console.log(`Server run in http://localhost:${app.get("port")}`)
);
