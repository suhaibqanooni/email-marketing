import React, { useEffect, useRef } from "react";
import "../style.css";
import sample from "../sample.json";
import EmailEditor from "react-email-editor";
import Header from "./Header";
export default function CreateEmail() {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml: ", html);
      console.log("DESIGN: ", design);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    const templateJson = {};
    // emailEditorRef.current.editor.addEventListener(
    //   "design:loaded",
    //   onDesignLoad
    // );
    emailEditorRef.current.editor.loadDesign(sample);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };
  return (
    <>
      <Header />
      <div style={{ width: "100%" }}>
        <h1>Create your own Template</h1>

        <button onClick={exportHtml} className="btn btn-danger">
          Export HTML
        </button>

        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </div>
    </>
  );
}
