import { model, Schema } from "mongoose";
import { MovieModel } from "@/types/models";

const movieSchema = new Schema<MovieModel>({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 5,
		maxlength: 60,
	},
	language: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 30,
	},
	year: {
		type: String,
		required: true,
		trim: true,
		minlength: 4,
		maxlength: 4,
	},
});

export const Movie = model<MovieModel>("movie", movieSchema);