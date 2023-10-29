import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
//import { Page } from "react-pdf";
import "../styles.css";
//import "../styles.scss";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>Jyotirmoy Das</h1>
      <p>{props.children}</p>
      <p>{props.number}</p>
    </div>
  );
});

function MyBook(props) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("It will appear here");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };

  return (
    <body bgcolor="LightCyan">
      <div>
        <HTMLFlipBook
          width={550}
          height={650}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}          
          flippingTime={1000}
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
        >
          <PageCover>Curriculum Vitae</PageCover>
          <PageCover></PageCover>
          <Page number="1">
            <hr></hr>
            <p contentEditable="true">You can edit here</p>
          </Page>
          <Page number="2">
            <hr></hr>
            <p contentEditable="true">{text}</p>
          </Page>
          <Page number="3">
            <hr></hr>
          </Page>
          <Page number="4">
            <hr></hr>
          </Page>
          <PageCover></PageCover>
          <PageCover>see you</PageCover>
        </HTMLFlipBook>
        <br></br>
        <br></br>
        <div className="formContainer">
          <input
            class="form-control"
            value={inputText}
            onChange={(e) => setInputElement(e.target.value)}
            type="text"
            placeholder="Place enter and press the buttom"
          />
          <button class="btn" onClick={printText}>
            indicate
          </button>
        </div>
      </div>
    </body>
  );
}

export default MyBook;