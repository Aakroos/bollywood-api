import { logger } from "@/utils/logger";
import { connect } from "mongoose";

export const connectToDB = async () => {
	try {
		const instance = await connect(`${process.env["DB_URI"]}/bollywood`);
		logger.info(`Connected to DB Host: ${instance.connection.host}`);
	} catch (error) {
		logger.error(`CONNECTION FAILED: ${error}`);
		process.exit(1);
	}
};
