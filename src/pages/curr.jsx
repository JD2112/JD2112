import React from "react";
//import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";

import "../styles.css";

import samplePDF from "./template.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 550;
const height = 733;

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} height={height}/>
    </div>
  );
});

export default function MyBook() {
  return (
    <div>
    <Document file={samplePDF}>
      <HTMLFlipBook width={width}
          height={height}
          // minWidth={315}
          // maxWidth={1000}
          // minHeight={420}
          // maxHeight={1350}
          showCover={true}          
          flippingTime={1000}
          // style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
          >
        {/* <PageCover>Curriculum Vitae</PageCover> */}
        <PageCover></PageCover>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
        <Page pageNumber={3} />
        <Page pageNumber={4} />
        <Page pageNumber={5} />
        <Page pageNumber={6} />
        <Page pageNumber={7} />
        <Page pageNumber={8} />
        <Page pageNumber={9} />
      </HTMLFlipBook>
    </Document>
    <br></br>
    <br></br>
    </div>
  );
}

//ReactDOM.render(<MyBook />, document.getElementById("app"));
