import { Router } from "express";
import { __dirname } from "../app.js";
import { addBrand, getAllBrandsQuery, removeBrand } from "../db/queries.js";

const indexRouter = Router();

indexRouter.get("/", async (req, res, next) => {
  const brands = await getAllBrandsQuery();
  res.render("index", { brands });
});

indexRouter.post("/", async (req, res, next) => {
  try {
    if (req.body.brandDelete) {
      const brand = req.body.brandDelete;
      await removeBrand(brand);
    } else if (req.body.brand) {
      await addBrand(req.body.brand);
    }
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});


export default indexRouter;
