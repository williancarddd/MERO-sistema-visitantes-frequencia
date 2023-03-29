import { useAtom } from "jotai";
import { useEffect } from "react";
import questions from "../../assets/questions";
import { QuestionAtom } from "../../atom/QuestionAtom";
import { FormHard } from "../FormHard";

export function FormRate() {
  const [questionF, setQuestionF] = useAtom(QuestionAtom);
  return (
    <div className="flex flex-col justify-between w-[54rem] h-full shadow-lg bg-white rounded-sm p-2">
      <div>
        <h1 className="font-bold text-center p-6 text-2xl uppercase "></h1>
      </div>
      <div className="flex-1">
        <FormHard />
      </div>
      <div  className="flex gap-8 h-12 mb-2">
        <button className=" ml-8 uppercase  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">modo Fácil</button>
        <button className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">modo Difícil</button>
      </div>
    </div>
  )
}