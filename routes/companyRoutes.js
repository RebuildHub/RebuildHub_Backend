const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
const auth = require("../middleware/auth");
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const { email, name } = req.body;
    const company = new Company({
      email,
      name,
    });
    await company.save();
    return res.json(company);
  } catch (error) {
    console.log(error.message);
  }
});

//get all company by name
router.get("/me", auth, async (req, res) => {
  try {
    const c = await User.findOne({ _id: req.user.id });
    if (!c) {
      return res.status(400).json({ msg: "Company not present" });
    }
    const company = await Company.findOne({ name: c.name });
    if (!company) {
      return res.status(400).json({ msg: "Company not present" });
    }
    return res.json(company.donations);
  } catch (error) {
    console.log(error.message);
  }
});


//get companies for perticular waste
router.get("/stats/:category/:waste", async (req, res) => {
  try {
    const companies = await Company.find({});
    const { waste, category } = req.params;
    console.log(waste, category);
    const result = [];
    companies.map((c) => {
      if (
        c.donations[category][waste].fullfilled <
        c.donations[category][waste].target
      ) {
        //fullfilled ,target , name
        const data = {};
        data.name = c.name;
        data.fullfilled = c.donations[category][waste].fullfilled;
        data.target = c.donations[category][waste].target;
        result.push(data);
      }
    });

    return res.json(result);
  } catch (error) {
    console.log(error);
  }
});


//get companies for perticular waste
router.post("/request/:category/:waste",auth, async (req, res) => {
  try {
    const {value} = req.body
    const c = await User.findOne({ _id: req.user.id });
    if (!c) {
      return res.status(400).json({ msg: "Company not present" });
    }
    const company = await Company.findOne({ name: c.name });
    if (!company) {
      return res.status(400).json({ msg: "Company not present" });
    }
    const { waste, category } = req.params;
    company.donations[category][waste].target+=value;
    await company.save()
    return res.json(company);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
