
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useCurrentEditor, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import './text-editor.css';


import { AiOutlineBold } from "react-icons/ai";
import { LuItalic } from "react-icons/lu";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";



const MenuBar = ({ editor }) => {

  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-row gap-2 px-2 bg-gray-100  shadow-lg rounded-sm  lg:rounded-full mb-3 flex-wrap border-b">
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <GrUndo className="text-xl" />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <GrRedo className="text-xl" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={`${editor.isActive('bold') ? 'is-active' : ''}`}
      >
        <AiOutlineBold className="text-xl" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <LuItalic className="text-xl" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <AiOutlineStrikethrough className="text-xl" />
      </button>
      {
        [1, 2, 3, 4, 5].map(h => (
          <button
            key={h}
            onClick={() => editor.chain().focus().toggleHeading({ level: h }).run()}
            className={` ${editor.isActive('heading', { level: h }) ? 'is-active' : ''}`}
          >
            h{h}
          </button>
        ))
      }
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        p
      </button>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]


const TextEditor = ({ handleUpdate, content }) => {


  const editor = useEditor({
    extensions: extensions,
    content: content,
    onUpdate: () => {
      handleUpdate(editor.getHTML());
    }
  });

  return (
    <div className="border p-5">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}


export default TextEditor;