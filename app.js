import express from "express";
import url from "url";
import path from "path";
import indexRouter from "./router/indexRouter.js";
import brandsRouter from "./router/brandsRouter.js";
import modelRouter from "./router/modelRouter.js";

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", indexRouter);
app.use("/:brand/:model", modelRouter);
app.use("/:brand", brandsRouter);



app.listen(PORT, () => {
  console.log("Server is running");
});
