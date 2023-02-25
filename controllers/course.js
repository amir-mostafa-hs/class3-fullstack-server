const Course = require("../models/courses");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const courses = await Course.findOne({ _id: id });
    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNewCourse = async (req, res) => {
  try {
    const newCourseData = req.body;
    const courses = await Course.create(newCourseData);
    return res.status(201).json(courses);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const courses = await Course.findOneAndDelete({ _id: id });
    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newCourseData = req.body;

    const courses = await Course.findByIdAndUpdate(_id, { ...newCourseData, _id }, { new: true });
    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllCourses,
  getOneCourse,
  createNewCourse,
  deleteCourse,
  updateCourse,
};
