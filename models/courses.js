const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CourseSchema = new Schema({
  title: {
    type: String,
    require: [true, "title is require!!"],
    maxlength: [20, "your course title should be 20 characters"],
  },
  category: String,
  slug: String,
  authorId: Number,
});

module.exports = model("Course", CourseSchema);
