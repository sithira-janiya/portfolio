const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: [120, "Project title cannot exceed 120 characters"],
    },

    subtitle: {
      type: String,
      trim: true,
      maxlength: [150, "Project subtitle cannot exceed 150 characters"],
    },

    summary: {
      type: String,
      required: [true, "Project summary is required"],
      trim: true,
      maxlength: [600, "Project summary cannot exceed 600 characters"],
    },

    role: {
      type: String,
      trim: true,
      maxlength: [160, "Project role cannot exceed 160 characters"],
    },

    techStack: {
      type: [String],
      default: [],
    },

    githubUrl: {
      type: String,
      trim: true,
    },

    liveUrl: {
      type: String,
      trim: true,
      default: "",
    },

    imageUrl: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: ["Completed", "Processing", "Live"],
      default: "Completed",
    },

    featured: {
      type: Boolean,
      default: true,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Project", projectSchema);
