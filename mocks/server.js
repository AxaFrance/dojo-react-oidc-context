import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";
import users from "./data/users.json";
import projects from "./data/projects.json";

const PORT = 4000;
const delay = 500;
const app = express();
const projectsRoutes = express.Router();
const adminRoute = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/project", projectsRoutes);
app.use("/api/admin", adminRoute);

projectsRoutes.get("/", (req, res) => {
  setTimeout(() => {
    res.send(projects);
  }, delay);
});

adminRoute.get("/users", (req, res) => {
  const jwtHeader = req.get("Authorization");
  if (jwtHeader) {
    console.log("Token : " + jwtHeader);
    setTimeout(() => {
      res.send(users);
    }, delay);
  } else {
    res.status(401).send("No token");
  }
});

app.listen(PORT, () => {
  console.log(`Mocks server listening on port ${PORT}!`);
});
