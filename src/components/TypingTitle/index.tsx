import { TypeAnimation }from 'react-type-animation';


interface Props {
  title: string;
}
export function TypingTitle({ title }: Props) {
  function formatTitle(title: string) {
    const letters = title.split(' ');
    const formattedWords: Array<string | number> = [] 
    letters.forEach((letter, i) => {
      return formattedWords.push(
        letter,
        2000,
      );
    });
    return formattedWords;
  }
  return (
    <h1 className="text-4xl font-bold text-center">
      <TypeAnimation
      sequence={formatTitle(title)}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em' }}
    />
    </h1>
  );
}
