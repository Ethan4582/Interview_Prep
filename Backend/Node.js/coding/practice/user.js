const express = require("express");
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
   res.send("this is user page");
});

userRouter.get('/:userId', (req, res) => {
   const userId = req.params.userId;
   res.send(userId);
});

module.exports = userRouter;