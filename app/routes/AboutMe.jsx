import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/AboutMe.css";

export default function AboutMe() {

  return (

    <div className="container">
      <Header />
        <div className="inner-body-container ">
          <br></br>
          <div className="about-me-header">
          <h1 className="vectro vectro-body">About me</h1>
          </div>
          <div className="about-me-body">
            <h2 className="vectro vectro-body"> Summary</h2>
            <p className="vectro vectro-body">
              Life long fan of all things technology related. Math and science
              are the subjects I excelled at in school. I love tinkering with
              devices and I like to know how things work. I'm great at solving
              problems and work well under pressure. I always rise to the role
              of leadership in whatever team I'm in.
            </p>
            <h2 className="vectro vectro-body"> Interests and Hobbies</h2>
            <p className="vectro vectro-body">
              Insufferable 90's kid. I love groovy tunes and good food. I'm an
              avid gamer. Always have been. I currently enjoy playing Starcraft
              2 despite it's age, Escape from Tarkov despite it's problems, and
              Rust despite it's community. I very much enjoy the surf, sand, and
              snow. I love to get to the beach when the sun is out or hit the
              slopes when the powder is fresh. I make a tasty alfredo sauce and
              toss my own pizza dough. I'd like to one day own a small pizza
              joint or classic car lot. I have been fixated on 50's - 70's cars
              as long as I can remember and more recently 80's. You will find a
              lot of my style is influenced by retro designs.
            </p>
          </div>
        <Footer />
        </div>
      </div>

  );
}