const express = require("express");

const router = express.Router();
//Import from burger to use database functions
const burger = require("../models/burger.js");

//Create routes

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            addaBurger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {

        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;