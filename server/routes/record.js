const express = require("express");

const Project = require("../models/schema");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

recordRoutes.route("/create").post(function (req, response) {
  let myobj = {
    subject: req.body.Subject,
    project: req.body.Project,
    email: req.body.Email,
    message: req.body.Message,
  };

  // creating document using create method
  Project.create(myobj)
    .then((result) => {
      response.json({ id: result.email });
    })
    .catch((err) => {
      response.status(err.statusCode).json(err.message);
    });
});

module.exports = recordRoutes;
