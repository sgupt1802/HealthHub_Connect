const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  // {
  //   timestamps: true,
  // }
  {
    timestamps: {
      currentTime: () => new Date(),
    },
    timeZone: 'Asia/Kolkata', // set your desired time zone
  }
);

const Appointment = mongoose.model("Appointment", schema);

module.exports = Appointment;
