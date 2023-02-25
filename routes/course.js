const { Router } = require("express");
const { getAllCourses, getOneCourse, createNewCourse, deleteCourse, updateCourse } = require("../controllers/course");

const router = Router();

/**
 * @URL : /course/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all courses data
 */
router.get("/", getAllCourses);

/**
 * @URL : /course/:id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get one course data
 */
router.get("/:id", getOneCourse);

/**
 * @URL : /course
 * @Method : POST
 * @Status : PUBLIC
 * @Description : create one course data
 */
router.post("/", createNewCourse);

/**
 * @URL : /course/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete one course data
 */
router.delete("/:id", deleteCourse);

/**
 * @URL : /course/:id
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : update one course data
 */
router.patch("/:id", updateCourse);

module.exports = router;
