const express = require("express");
const Logger = require("./middleware/Logger");
// require("dotenv").config();
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const CourseRoutes = require("./routes/course");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors(), Logger, express.json(), express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(Logger);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to course API");
});
app.use("/course", CourseRoutes);

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("test post body");
// });

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("The server running on port:", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
