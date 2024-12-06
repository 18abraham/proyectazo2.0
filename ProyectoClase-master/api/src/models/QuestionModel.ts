import {Schema, model} from "mongoose"
import { IQuestion } from "../GlobalTypes";

const QuestionSchema = new Schema<IQuestion>({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["radio","checkbox","select","text"],
        required:true
    },
    isMandatory:{
        type:Boolean,
        required:true
    },
    questionnaireId:{
        type:String,
        ref: "questionnaires",
        required:true
    },
});
export const QuestionModel = model("questions", QuestionSchema);

