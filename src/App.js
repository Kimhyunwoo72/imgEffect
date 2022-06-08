import React, { useEffect } from "react";
import "./App.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import { useEffect, useState } from "react";

export default function App() {
  // const [position, setPosition] = useState(0);

  // function onScroll() {
  //   console.log(window.scrollY);
  //   setPosition(window.scrollY);
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.addEventListener("scroll", onScroll);
  //   };
  // }, []);
  useEffect(() => {
    // let SECTIONS = gsap.utils.toArray(".imgWrap");

    gsap.to(".img1", {
      scrollTrigger: {
        trigger: ".img1",
        start: "top",
        markers: true,
        end: "50%",
        scrub: 1,
      },
      duration: 2,
      scale: 0.5,
    });
    gsap.to(".img2", {
      scrollTrigger: {
        trigger: ".img1",
        start: "top",
        markers: true,
        scrub: 1,
        end: "50%",
      },
      duration: 2,
      scale: 1,
    });
    gsap.to(".imgg", {
      scrollTrigger: {
        trigger: ".img2",
        start: "top",
        markers: true,
        scrub: 1,
        end: "50%",
      },
      duration: 2,
      scale: 0.5,
    });

    gsap.to(".img3", {
      scrollTrigger: {
        trigger: ".img2",
        start: "top",
        markers: true,
        scrub: 1,
        end: "70%",
      },
      duration: 2,
      scale: 1,
    });
  });
  return (
    <main className="App">
      <div className="wrap">
        <section className="title">
          <h1>안녕하세요. 지원자 김현우 입니다.</h1>
          <p>사전테스트 과제입니다.</p>
        </section>
        <section className="imgWrap">
          <article className="img img1">
            <img src="img/music01.jpg" alt="이미지1" />
          </article>
          <article className="img img2">
            <img className="imgg" src="img/music02.jpg" alt="이미지2" />
          </article>
          <article className="img img3">
            <img src="img/music03.jpg" alt="이미지3" />
          </article>
        </section>
      </div>
    </main>
  );
}
