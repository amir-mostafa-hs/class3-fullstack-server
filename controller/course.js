const Course = require("../models/courses");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});

    res.status(200).json({ courses });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    //matcher
    const course = await Course.findOne({ _id: courseID });

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;

    const course = await Course.create(newCourse);
    res.status(200).json({ course });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const course = req.body;
    const updateCourse = await Course.findByIdAndUpdate(_id, { ...course, _id }, { new: true });
    res.status(200).json({ updateCourse });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOneAndDelete({ _id: courseID });

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
