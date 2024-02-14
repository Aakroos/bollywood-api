import { apiHandler } from "@/utils/api-handler";

export const healthController = apiHandler((_, res) => {
	return res.status(200).json({
		success: true,
		code: 200,
		message: "Everything is fine",
	});
});
