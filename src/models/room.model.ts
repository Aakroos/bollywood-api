import { model, Schema } from "mongoose";
import { RoomModel } from "@/types/models";

const roomSchema = new Schema<RoomModel>(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 4,
			maxlength: 70,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_, returningDoc) => {
				returningDoc["id"] = returningDoc["_id"];
				delete returningDoc["_id"];
			},
		},
	},
);

export const Room = model<RoomModel>("room", roomSchema);
