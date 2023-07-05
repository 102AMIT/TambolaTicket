import { Router } from "express";
const router = Router();
import { login } from "../../../controller/v1/user.js";
import { createTicket } from "../../../controller/v1/ticket.js";



// LogIn User

router.post("/login", login);
router.post("/create-ticket", createTicket);
export default router;