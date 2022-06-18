import {info} from './informations.js'
import { Question } from '../Modules/Question.js'

export const newQuestions = info.map(element => new Question(element.img,element.question, element.choices, element.answer))