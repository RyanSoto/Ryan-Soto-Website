import MainComp from "../components/MainComp";

export const meta = () => {
  return [
    { title: "About Me - Ryan Soto" },
    { name: "About Ryan Soto", content: "Learn more about Ryan Soto" },
  ];
};

export default function AboutMe() {
  return (
    <MainComp initialPage="aboutme" />
  );
}