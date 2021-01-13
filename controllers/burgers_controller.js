const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", function (req, res) {
    burger.selectALL(function (data) {
        const burgerObject = {
            burger_name: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create(
        ["burger_name"],
        [req.body.burger_name],
        function (result) {
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id=" + req.params.id;
    console.log(condition);

    burger.update(
        {
            devoured: true,
        },
        condition,
        function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;