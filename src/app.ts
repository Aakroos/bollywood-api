import express from "express";
import { logger } from "@/utils/logger";
import { morganConfig } from "@/middlewares/morgan";
import { apiHandler } from "@/utils/api-handler";

export const startServer = () => {
	const app = express();

	const PORT = process.env["PORT"];

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
