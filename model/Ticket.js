import mongoose from "mongoose";

export const TicketSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
});

export default mongoose.model.Ticket || mongoose.model("Ticket", TicketSchema);
