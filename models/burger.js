const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("addaBurger", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("addaBurger", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("addaBurger", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("addaBurger", condition, function(res) {
          cb(res);
        });
    }
};




module.exports = burger;