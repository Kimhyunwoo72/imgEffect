import React, { useEffect } from "react";
import "./App.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Width = window.innerWidth;
console.log(Width);
export default function App() {
  useEffect(() => {
    if (Width >= 600) {
      gsap.to(".img1", {
        scrollTrigger: {
          trigger: ".img1",
          start: "top",
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
          scrub: 1,
          end: "70%",
        },
        duration: 2,
        scale: 1,
      });
    } else {
      gsap.to(".img1", {
        scrollTrigger: {
          trigger: ".img1",
          start: "-40%",
          end: "50%",
          scrub: 1,
        },
        duration: 2,
        scale: 0.5,
      });
      gsap.to(".img2", {
        scrollTrigger: {
          trigger: ".img1",
          start: "-40%",
          end: "60%",
          scrub: 1,
        },
        duration: 2,
        scale: 1,
      });
      gsap.to(".imgg", {
        scrollTrigger: {
          trigger: ".img2",
          start: "-30%",
          end: "50%",
          scrub: 1,
        },
        duration: 2,
        scale: 0.5,
      });

      gsap.to(".img3", {
        scrollTrigger: {
          trigger: ".img2",
          start: "-40%",
          scrub: 1,
          end: "30%",
        },
        duration: 2,
        scale: 1,
      });
    }
  });

  return (
    <main className="App">
      <div className="wrap">
        <section className="title">
          <h1>???????????????. ????????? ????????? ?????????.</h1>
          <p>??????????????? ???????????????.</p>
        </section>
        <section className="imgWrap">
          <article className="img img1">
            <img src="img/music01.jpg" alt="?????????1" />
          </article>
          <article className="img img2">
            <img className="imgg" src="img/music02.jpg" alt="?????????2" />
          </article>
          <article className="img img3">
            <img src="img/music03.jpg" alt="?????????3" />
          </article>
        </section>
      </div>
    </main>
  );
}
