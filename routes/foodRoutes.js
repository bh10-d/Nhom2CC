const express = require("express");
const foodModel = require("../models/food.js");
const app = express();
app.get("/foods", async (request, response) => {
    const foods = await foodModel.find({});
    console.log(foods)
    try {
        response.send(foods);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/food", async (request, response) => {
    const food = new foodModel(request.body);
    try {
        await food.save();
        response.send(food);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = app;