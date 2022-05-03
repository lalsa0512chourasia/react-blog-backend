//length of this file should not be increase size atleast increase only 4 lines also if we want i.e. due to get,put,post, update method

const express = require("express");
const categoryRouter = express.Router();     //allows to create child routes
// const categoryRouter2 = express.Router(); 

const access = require("../controllers/category")  // importing controllers folder

categoryRouter.route("/").get(access.getData)  

  // categoryRouter2.route("/").get(access.getData)
//get ,post, put, delete whatever function we want to write we write here
//insie this fun. we can write res.send but we do not prefer to do in routing file we always write logic in controllers file

module.exports = categoryRouter;

