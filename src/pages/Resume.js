import "./Resume.css";
import React, { Component } from "react";
import { pdfjs } from "react-pdf";
import Nav from "../components/Nav";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    return (
      <>
        <div>
          <Nav />
        </div>
        <div className="content-container-center">
          <iframe
            src="https://drive.google.com/file/d/1ArlaxE4Moh-91KEBf7rBXji6K0o26hyo/preview"
            width="70%"
            height="800"
            allow="autoplay"
          ></iframe>
        </div>
      </>
    );
  }
}

export default Resume;
