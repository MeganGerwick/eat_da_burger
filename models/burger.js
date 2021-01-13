var orm = require("../config/orm.js");

var burger = {
    selectALL: function (cb) {
        orm.selectALL("burgers", function (res) {
            cb(res);
        });
    },

    create: function (burgerArray, vals, cb) {
        orm.insertONE("burgers", burgerArray, vals, function (res) {
            cb(res);
        })

    },

    update: function (burgerArray, condition, cb) {
        orm.updateONE("burgers", burgerArray, condition, function (res) {
            cb(res);
        })

    },
}
module.exports = burger;