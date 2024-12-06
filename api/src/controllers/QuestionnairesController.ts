import { Request, Response } from "express";
import { IQuestionnaires } from "../GlobalTypes";
import { QuestionModel } from "../models/QuestionModel";
import { QuestionnaireModel } from "../models/QuestionnaireModel";
import { OptionModel } from "../models/OptionsModel";
import { UserModel } from "../models/UserModel";


export const createQuizz = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body;
        if (!body.description || !body.title || !body.userId) {
            res.status(400).json({ msg: "Faltan datos para crear un cuestionario" })
        }
        const questionnaire: IQuestionnaires = {
            description: body.description,
            title: body.title,
            userId: body.userId
        }

        let isInvalidQuestion = false;
        for (const question of body.questions) {
            if (!question.title || !question.type || typeof question.isMandatory == "undefined") {
                isInvalidQuestion = true;
            }
            if (question.options.length <= 0 || !question.options[0] || question.options[0].length <= 0) {
                isInvalidQuestion = true
            }
        }

        if (isInvalidQuestion) {
            res.status(400).json({ msg: "Faltan datos para crear un cuestionario (en preguntas)" })
            return
        }
        const createdQuestionnaire = await QuestionnaireModel.create(questionnaire);
        for (const question of body.questions) {
            const objQuestion = {
                title: question.title,
                type: question.type,
                isMandatory: question.isMandatory,
                questionnaireId: createdQuestionnaire._id
            };
            const createdQuestion = await QuestionModel.create(objQuestion);
            for (const option of question.options) {
                const objOption = {
                    title: option,
                    questionId: createdQuestion._id
                }
                await OptionModel.create(objOption);
            }
        }
        res.status(200).json({ msg: "Cuestionario creado con exito" })
        return
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error al crear el cuestionario" })
        return
    }
}

export const getMetrics = async (req: Request, res: Response): Promise<void> => {
    try {
        const numberOfUsers = await UserModel.find({ rol: "client" }).countDocuments();
        const numberOfQuestionnaires = await QuestionnaireModel.find().countDocuments();
        res.status(200).json({ msg: "Datos obtenidos con exito", numberOfQuestionnaires, numberOfUsers });
        return
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error al obtener las metricas de la aplicación" })
        return
    }
}

export const getQuestionnaires = async (req: Request, res: Response): Promise<void> => {
    try {
        const questionnaires = await QuestionnaireModel.find();
        res.status(200).json({msg:"Cuestionarios obtenidos con exito",questionnaires})
        return;
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error al obtener los cuestionarios" })
        return
    }
}