import { Document } from "mongoose";

export type MovieModel = Document & {
	name: string;
	language: string;
	year: string;
};
