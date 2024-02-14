import { healthController } from "@/controllers/health-check";
import { Router } from "express";

export const healthCheckRouter = Router();

healthCheckRouter.route("/").get(healthController);
