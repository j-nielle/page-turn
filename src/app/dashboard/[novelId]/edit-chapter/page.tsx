/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Editor from "@/components/editor/Editor";
import Quill, { Delta, Range } from "quill";
import { useState } from "react";

export default function Page() {
  const [content, setContent] = useState<Delta>();

  // const handleSelectionChange = (range: Range, oldRange: Range, source: string) => {
  //   console.log("Selection changed:", range, oldRange, source);
  // };

  // const handleEditorReady = (editor: Quill) => {
  //   console.log("Editor instance:", editor);
  //   editor.focus();
  // };

  // const initialContent: Delta = {
  //   ops: [
  //     { insert: "Hello " },
  //     { insert: "World!", attributes: { bold: true } },
  //     { insert: "\n" },
  //   ],
  // };

  // const uploadImage = async (file: File) => {
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   const response = await fetch("https://your-cloud-service.com/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const { url } = await response.json();
  //   return url;
  // };

  // const uploadImage = async (file: File) => {
  //   const data = new FormData();
  //   data.append("file", file);
  //   data.append("upload_preset", "your_upload_preset");

  //   const response = await fetch(
  //     `https://api.cloudinary.com/v1_1/your-cloud-name/image/upload`,
  //     { method: "POST", body: data }
  //   );

  //   const result = await response.json();
  //   return result.secure_url;
  // };
  return (
    <>
      <div>
        <h2>Title:</h2>
        <p>Translated by:</p>
        <p>Edited by:</p>
      </div>
      <Editor
        // defaultValue="<p>Start editing <strong>this text</strong>!</p>"
        // defaultValue={initialContent}
        // onImageUpload={uploadImage}
        onTextChange={(delta) => setContent(delta)}
        // onSelectionChange={handleSelectionChange}
        // onEditorReady={handleEditorReady}
      />
      <button onClick={() => console.log("Saving:", content)}>
        Save Content
      </button>
    </>
  );
}
