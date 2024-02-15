import express from "express";
import Homecontrollers from "../controllers/Homecontrollers"

let router = express.Router();

let initWWebRoutes = (app) => {
    router.get('/', Homecontrollers.GetHomePage);
    router.get('/about', Homecontrollers.GetAboutPage);
    return app.use("/", router)
}

module.exports = initWWebRoutes;