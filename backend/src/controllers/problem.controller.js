import {Problem} from "../models/problem.model.js";

// ➤ Add Problem (Patient Only)
 const addProblem = async (req, res) => {
  try {
    const {
      title,
      description,
      severity,
      date,
    } = req.body;

    // Validate required fields
    if (!title || !description || !severity) {
      return res.status(400).json({
        message: "Title, description, and severity are required",
      });
    }

    const newProblem = await Problem.create({
      patient: req.user._id, // from auth middleware
      title,
      description,
      severity,
      date,
    });

    res.status(201).json({
      success: true,
      message: "Problem submitted successfully",
      data: newProblem,
    });
  } catch (error) {
    console.error("Add Problem Error:", error);
    res.status(500).json({
      message: "Server error while adding problem",
    });
  }
};

const getMyProblems = async (req, res) => {
  try {
    const problems = await Problem.find({
      patient: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: problems,
    });
  } catch (error) {
    console.error("Get Problems Error:", error);
    res.status(500).json({
      message: "Server error while fetching problems",
    });
  }
};

 const getAllProblems = async (req, res) => {
  try {
    const filter = {};
    if (req.query.patient) {
      filter.patient = req.query.patient;
    }

    const problems = await Problem.find(filter)
      .populate("patient", "fullName email username")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: problems,
    });
  } catch (error) {
    console.error("Get All Problems Error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

 const updateProblemStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Problem.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Problem not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated",
      data: updated,
    });
  } catch (error) {
    console.error("Update Status Error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export { addProblem, getMyProblems, getAllProblems, updateProblemStatus };
