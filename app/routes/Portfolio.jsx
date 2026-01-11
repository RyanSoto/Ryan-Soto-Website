import MainComp from "../components/MainComp";

export const meta = () => {
  return [
    { title: "Portfolio - Ryan Soto" },
    { name: "Ryan Soto's Portfolio", content: "Check out Ryan Soto's projects" },
  ];
};

export default function Portfolio() {
  return (
    <MainComp initialPage="portfolio" />
  );
}
