import { Document } from "mongoose";

export type AvatarModel = Document & {
	avatar: string;
	tag: string;
	movie: string | null;
};
