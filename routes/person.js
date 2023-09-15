const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Person = require("../models/person");

const personSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
});

router.post("/", async (req, res) => {
  try {
    const { error } = personSchema.validate(req.body);
    if (error) {
      return res.status(404).send(`Error: ${error.details[0].message}`);
    }

    const { name } = req.body;
    const person = await Person.create({ name });
    res.status(201).send(person);
  } catch (error) {
    res.status(500).send("Not able to create person", error.message);
  }
});

// Read a person by user_id
router.get("/:user_id", async (req, res) => {
  const userId = req.params.user_id;
  console.log("User ID from route parameter:", userId); // Add this line for debugging

  try {
    const person = await Person.findById(userId);
    if (!person)
      return res.status(404).send(`Person with id ${userId} doesn't exist`);

    res.status(200).send(person);
  } catch (error) {
    res.status(500).send("Error getting person", error.message);
  }
});
// router.get("/", async (req, res) => {
//   try {
//     const person = await Person.find();
//     res.status(200).send(person);
//   } catch (error) {
//     res.status(400).send("Can't get Person");
//     console.log("Error getting People", error.message);
//   }
// });

// Update a person by user_id
router.put("/:user_id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) return res.status(404).send("Person doesn't exist");

    const { error } = personSchema.validate(req.body);
    if (error) {
      return res.status(400).send(`Error: ${error.details[0].message}`);
    }

    const updatePerson = await Person.findByIdAndUpdate(person._id, req.body, {
      new: true,
    });
    res.status(202).send(updatePerson);
  } catch (error) {
    res.status(500).send("Not able to update person");
  }
});

router.delete("/:user_id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) return res.status(400).send("Person doesn't exist");

    const deletedPerson = await Person.findByIdAndDelete({
      _id: person._id,
    });
    res.status(200).send(person);
    console.log(deletedPerson);
  } catch (error) {
    res
      .status(400)
      .send(`Unable to delete person with id ${req.params.user_id}`);
    console.error("Delete Error: ", error.message);
  }
});

module.exports = router;
