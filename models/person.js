const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: [String, "Please Enter a String"],
    required: [true, "Please Provide a name"],
    minlength: [3, "Name should have atleast 3 Characters"],
    maxlength: [50, "Name cannot have greater than 50 Characters"],
  },
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
