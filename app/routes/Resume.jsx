import MainComp from "../components/MainComp";

export const meta = () => {
  return [
    { title: "Resume - Ryan Soto" },
    { name: "Ryan Soto's Resume", content: "Ryan Soto's professional resume" },
  ];
};

export default function Resume() {
  return (
    <MainComp initialPage="resume" />
  );
}