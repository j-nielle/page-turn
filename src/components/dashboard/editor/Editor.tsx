import React, { useEffect, useLayoutEffect, useRef } from "react";
import Quill, { type Delta, type Range } from "quill";
import "quill/dist/quill.snow.css";
import { quillToolbar } from "@/lib/constants/quill";

interface EditorProps {
  readOnly?: boolean;
  defaultValue?: string | Delta;
  onTextChange?: (delta: Delta, oldDelta: Delta, source: string) => void;
  onSelectionChange?: (range: Range, oldRange: Range, source: string) => void;
  onEditorReady?: (editor: Quill) => void;
  // onImageUpload?: (file: File) => Promise<string>;
}

export default function Editor({
  readOnly = false,
  defaultValue = "",
  onTextChange,
  onSelectionChange,
  onEditorReady,
}: // onImageUpload,
EditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const onTextChangeRef = useRef(onTextChange);
  const onSelectionChangeRef = useRef(onSelectionChange);

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
  }, [onTextChange]);

  useLayoutEffect(() => {
    onSelectionChangeRef.current = onSelectionChange;
  }, [onSelectionChange]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const editorContainer = document.createElement("div");
    container.appendChild(editorContainer);

    const quill = new Quill(editorContainer, {
      theme: "snow",
      readOnly,
      modules: {
        toolbar: {
          container: quillToolbar,
          handlers: {
            // image: () => handleImageUpload(quill),
          },
        },
      },
    });

    quillRef.current = quill;

    if (defaultValue) {
      if (typeof defaultValue === "string") {
        quill.clipboard.dangerouslyPasteHTML(defaultValue);
      } else {
        quill.setContents(defaultValue);
      }
    }

    quill.on("text-change", (...args) => {
      onTextChangeRef.current?.(...args);
    });

    quill.on("selection-change", (...args) => {
      onSelectionChangeRef.current?.(...args);
    });

    // quill.root.addEventListener("paste", async (e) => {
    //   const items = e.clipboardData?.items;
    //   if (items) {
    //     for (const item of items) {
    //       if (item.type.startsWith("image")) {
    //         e.preventDefault();
    //         const file = item.getAsFile();
    //         if (file && onImageUpload) {
    //           await uploadAndInsertImage(quill, file);
    //         }
    //       }
    //     }
    //   }
    // });

    onEditorReady?.(quill);

    return () => {
      if (quillRef.current) {
        quill.off("text-change");
        quill.off("selection-change");
        quillRef.current = null;
      }
      if (editorContainer.parentNode === container) {
        container.removeChild(editorContainer);
      }
      quill.root.remove();
    };
  });

  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.enable(!readOnly);
    }
  }, [readOnly]);

  // const handleImageUpload = (quill: Quill) => {
  //   const input = document.createElement("input");
  //   input.type = "file";
  //   input.accept = "image/*";

  //   input.onchange = async () => {
  //     const file = input.files?.[0];
  //     if (file && onImageUpload) {
  //       await uploadAndInsertImage(quill, file);
  //     }
  //   };

  //   input.click();
  // };

  // const uploadAndInsertImage = async (quill: Quill, file: File) => {
  //   if(!onImageUpload) {
  //     return;
  //   }

  //   const range = quill.getSelection();

  //   try {
  //     const loadingUrl = "https://example.com/loading-spinner.svg";

  //     // Insert temporary loading image
  //     quill.insertEmbed(range?.index || 0, "image", loadingUrl);

  //     // Upload to cloud
  //     const imageUrl = await onImageUpload(file);

  //     // Replace temporary image with final URL
  //     quill.deleteText(range?.index || 0, 1);
  //     quill.insertEmbed(range?.index || 0, "image", imageUrl);
  //   } catch (error) {
  //     console.error("Image upload failed:", error);
  //     quill.deleteText(range?.index || 0, 1);
  //   }
  // };

  return <div ref={containerRef} />;
}
