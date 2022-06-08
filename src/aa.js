import React from "react";
import "./App.scss";
import { useEffect, useState } from "react";

export default function App() {
  const [position, setPosition] = useState;

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.addEventListener("scroll", onScroll);
    };
  }, []);
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
            <img src="img/music02.jpg" alt="이미지2" />
          </article>
          <article className="img img3">
            <img src="img/music03.jpg" alt="이미지3" />
          </article>
        </section>
      </div>
    </main>
  );
}
