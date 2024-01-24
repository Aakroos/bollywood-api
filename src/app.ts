import express from "express";
import { logger } from "@/utils/logger";
import { morganConfig } from "@/middlewares/morgan";
import { apiHandler } from "@/utils/api-handler";
import cors from "cors";
import { getOrigins } from "@/utils/get-origins";
import cookieParser from "cookie-parser";

export const startServer = () => {
	const app = express();

	const PORT = process.env["PORT"];
	const WHITELISTED_ORIGINS_STRING =
		process.env["WHITELISTED_ORIGINS"] ?? "http://localhost:8000";

	app.use(
		cors({
			credentials: true,
			origin: getOrigins(WHITELISTED_ORIGINS_STRING),
		}),
	);
	app.use(express.json());
	app.use(cookieParser());

	app.use(morganConfig);

	app.get(
		"/",
		apiHandler((req, res) => {
			return res.status(200).json({
				success: true,
				code: 200,
				message: "OK! from bollywood API",
			});
		}),
	);

	app.listen(PORT, () => logger.info(`App is running on PORT: ${PORT}`));
};
