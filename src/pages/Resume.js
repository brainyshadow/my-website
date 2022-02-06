import "../App.css";
import React, { Component } from "react";
import ResumePDF from "../Media/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
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
          <Document
            style={{ display: "block", margin: "auto" }}
            file={ResumePDF}
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      </>
    );
  }
}

export default Resume;
