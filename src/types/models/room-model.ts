import { Document } from "mongoose";

export type RoomModel = Document & {
	name: string;
};
