import { Router } from "express";
import { __dirname } from "../app.js";
import { getModelsByBrandQuery } from "../db/queries.js";

const brandsRouter = Router({ mergeParams: true });


brandsRouter.get("/", async (req, res, next) => {
const brand = req.params.brand;
  const models = await getModelsByBrandQuery(brand);
  console.log(brand, models);
    res.render("brand", {
        brand,
        models
    });
});

export default brandsRouter;
