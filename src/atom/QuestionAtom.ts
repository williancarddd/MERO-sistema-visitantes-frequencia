import { atom } from 'jotai';
import questions from '../assets/questions';

export const QuestionAtom = atom({ 
  id_question: 1,
  total_question: questions.length,
});