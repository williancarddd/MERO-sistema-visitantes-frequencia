import { IQuestion } from "../../interfaces/IQuestion";

interface Props {
  question: IQuestion;
}
const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
export function CardQuestions({ question }: Props) {
  return (
    <div className="w-full max-w-3xl h-60 border border-gray-100 rounded-lg shadow bg-white p-4">
      <div className="mb-2  mt-2 text-base  text-gray-900 md:text-xl">
        <h1>{question.title}</h1>
      </div>
      <div>
        <p>{question.description}</p>
      </div>
      <div className="flex flex-col justify-start  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 group dark:text-white">
        {
          question.answers.map((answer, index) => {
            return (
              <div key={index} className="text-black flex ">
                <div className="flex gap-1 cursor-pointer hover:shadow w-full "><strong>{alpha[index]}</strong><p>{answer.description}</p></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}