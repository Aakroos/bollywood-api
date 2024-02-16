import { model, Schema } from "mongoose";
import { AvatarModel } from "@/types/models";

export const avatarSchema = new Schema<AvatarModel>({
	avatar: {
		type: String,
		required: true,
		trim: true,
	},
	tag: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 40,
	},
	movie: {
		type: String,
		required: false,
		default: null,
		trim: true,
		minlength: 5,
		maxlength: 60,
	},
});

export const Avatar = model<AvatarModel>("avatar", avatarSchema);
