import { model, Schema } from "mongoose";
import { IQuestionnaires } from "../GlobalTypes";



const QuestionnaireSchema = new Schema<IQuestionnaires>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

export const QuestionnaireModel = model("questionnaires", QuestionnaireSchema);