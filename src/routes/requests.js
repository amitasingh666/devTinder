const express = require("express");

const requestRouter = express.Router();

const userAuth = require("../middlewares/auth");

requestRouter.post("/sendConnectionRequest", userAuth, async(req, res) => {
    const user = req.user;


});

module.exports = requestRouter;