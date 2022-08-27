import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  });

  console.log(editor);

  return (
    <EditorContent
      editor={editor}
      onChange={(content) => {
        console.log(content);
      }}
    />
  );
};

export default Editor;
