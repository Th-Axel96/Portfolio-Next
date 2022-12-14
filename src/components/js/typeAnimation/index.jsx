import { TypeAnimation } from "react-type-animation";

export const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front-End", // Types 'One'
        2000, // Waits 1s
        "Back-End", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "FullStack", // Types 'Three' without deleting 'Two'
        2000,
      ]}
      className="font-alice"
      speed={30}
      wrapper="div"
      cursor={false}
      repeat={Infinity}
    />
  );
};
