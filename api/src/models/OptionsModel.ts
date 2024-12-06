import { Schema, model } from "mongoose";
import { IOption } from "../GlobalTypes";


const OptionSchema = new Schema<IOption>({
    title: {
        type: String,
        required: true,
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "questions",
        required: true,
    },
});

export const OptionModel = model("options", OptionSchema);