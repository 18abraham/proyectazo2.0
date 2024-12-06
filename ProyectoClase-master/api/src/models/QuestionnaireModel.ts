import { Schema, model } from "mongoose";
import { IQuestionnaire } from "../GlobalTypes";

const QuestionnaireSchema = new Schema<IQuestionnaire>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
});

export const QuestionnaireModel = model("questionnaires", QuestionnaireSchema);