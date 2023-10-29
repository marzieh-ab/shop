import React, { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
type Props = {
  setDescription: React.Dispatch<React.SetStateAction<any>>;
  description: string;
};

const Para = ({ setDescription, description }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose w-full focus:outline-none leading-5 prose-a:text-pink-600 prose-a:font-semibold prose-a:no-underline",
      },
    },
    content: description,
  });
  const html = editor?.getHTML();
  console.log(html, "htmllll");
  const menuRef = useRef<HTMLDivElement>(null);

  console.log(menuRef, "reffff");
  useEffect(() => {
    const handler = (e: any) => {
      console.log(e.target, "targeyyy");
      if (!menuRef.current?.contains(e.target)) {
        setFocus(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  console.log(focus, "focus");

  useEffect(() => {
    setDescription(html);
    console.log(html);
  }, [html]);

  return (
    <div
      className={`mx-auto border-[1px] mt-4 rounded-xl ${
        focus ? "border-pink-500 border-[2px] ml-0" : ""
      }`}
      ref={menuRef}
    >
      <EditorContent
        editor={editor}
        style={{ padding: "18px" }}
        onClick={() => setFocus(true)}
      />
    </div>
  );
};

export default Para;
