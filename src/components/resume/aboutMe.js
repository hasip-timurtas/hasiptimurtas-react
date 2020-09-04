import React from "react";

const aboutMe = (props) => {
  return (
    <div class="row about-me">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <p class="text-indent">
          Hi! I'm Hasip, a {new Date().getFullYear() - 1991} years old developer based in Malta, I specialise in building web apps. My career started
          at an early age, when I was 16 I started programming. My first "good" program was a damage calculation software in high school. With the
          pass of the years, I decided to transform my hobby into a profession so I studied programming in Karabuk University. I consider myself a
          full-stack developer. I'm currently working in a company in Malta, I enjoy developing web applications and learning new technologies for
          developing faster and better. I am a self-taught person, I love learning new things and improving my skills in different web platforms such
          as Udemy, teamtreehouse and youtube. I like Javascript (Javascript is everywhere : ) , coffee, linux and sometimes playing video games, I
          enjoy building stuff, investigating new technologies.
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
