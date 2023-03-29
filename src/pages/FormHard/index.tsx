import { useAtom } from "jotai/react"
import questions from "../../assets/questions"
import { QuestionAtom } from "../../atom/QuestionAtom";
import { CardQuestions } from "../../components/CardQuestions"

export function FormHard() {
  const [questionF, setQuestionF] = useAtom(QuestionAtom);
  return (
    <div>
      <CardQuestions question={questions.filter(e => e.id === questionF.id_question)[0]} />
    </div>
  )
}