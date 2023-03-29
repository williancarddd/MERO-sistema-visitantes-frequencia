import { IAnswer } from "../interfaces/IAnswer";
import { IQuestion } from "../interfaces/IQuestion";


const answers: IAnswer[] = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/id/237/200/300',
  },
  {
    id: 2,
    description: 'Consectetur adipiscing elit',
    image: 'https://picsum.photos/id/238/200/300',
  },
  {
    id: 3,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: 'https://picsum.photos/id/239/200/300',
  },
  {
    id: 4,
    description: 'Ut enim ad minim veniam',
    image: 'https://picsum.photos/id/240/200/300',
  },
];

const questions: IQuestion[] = [
  {
    id: 1,
    title: 'Question 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    answers: answers.slice(0, 2),
    answerCorrectId: 1,
  },
  {
    id: 2,
    title: 'Question 2',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    answers: answers.slice(2, 4),
    answerCorrectId: 3,
  },
  {
    id: 3,
    title: 'Question 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    answers,
    answerCorrectId: 4,
  },
];

export default questions;