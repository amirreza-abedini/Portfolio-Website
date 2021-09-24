import Typist from "react-typist";
const Typing = ({ remove, text_1, text_2, setCount }) => {
  return (
    <Typist
      cursor={remove}
      avgTypingDelay={110}
      onTypingDone={() => setCount(0)}
    >
      <Typist.Delay ms={600} />
      <span>من یک {text_1}</span>
      <Typist.Delay ms={600} />
      <Typist.Backspace count={text_1.length} delay={100} />
      <Typist.Delay ms={600} />
      <span>{text_2}</span>
      <Typist.Delay ms={600} />
      <Typist.Backspace count={text_2.length + 6} delay={100} />
    </Typist>
  );
};

export default Typing;
