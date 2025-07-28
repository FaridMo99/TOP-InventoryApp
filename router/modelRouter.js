import { Router } from "express";
import { __dirname } from "../app.js";
import { getCarByModel } from "../db/queries.js";

const modelRouter = Router({ mergeParams: true });


modelRouter.get("/", async (req, res, next) => {
    const brand = req.params.brand;
    const modelParam = req.params.model;

  const model = await getCarByModel(modelParam);
    res.render("model", {
        model
    });
});

export default modelRouter;