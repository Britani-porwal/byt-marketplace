const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    project: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;