import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
const TipTap = ({onContentChange} : {onContentChange: (content: string) => void}) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content: "<p>Tell your story...</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const content = editor.getHTML(); // Retrieve content as HTML
      onContentChange(content); // Pass the content to the parent
    },
  });
  if (!editor) {
    return <div>Loading editor...</div>;
  }
  return (
    <div className=" rounded-md  min-h-[300px]">
      <ContextMenu>
        <ContextMenuTrigger>
          <EditorContent editor={editor} className="min-h-[300px]" />
        </ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            {editor.isActive("bold") ? "Unbold" : "Bold"}
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            {editor.isActive("italic") ? "UnItalic" : "Italic"}
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            {editor.isActive("underline") ? "Remove Underline" : "Underline"}
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export default TipTap;
