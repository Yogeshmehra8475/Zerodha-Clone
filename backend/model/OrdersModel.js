const { model } = require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersMOdel = new model("order", OrdersSchema);

module.exports={ OrdersModel };