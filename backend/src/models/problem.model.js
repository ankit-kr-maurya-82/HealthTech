import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    symptoms: [
      {
        type: String,
        enum: [
          "Weakness",
          "Stomach Pain",
          "Digestion Issue",
          "Sugar Problem",
          "Other",
        ],
      },
    ],
    foodType: {
      type: String,
      enum: ["Veg", "Junk", "Mixed"],
      required: true,
    },
    sweetConsumption: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },
    packagedJuice: {
      type: Boolean,
      default: false,
    },
    report: {
      type: String,
    }, // optional uploaded file (image / PDF URL)
    status: {
      type: String,
      enum: ["Pending", "Reviewed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Problem", problemSchema);
