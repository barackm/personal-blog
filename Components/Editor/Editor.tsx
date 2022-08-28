import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { getEditorTopBarItems } from './utils';
import Button from './Button';

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text, Typography, Highlight],
    content: '<p>Hello World! 🌎️</p>',
    onUpdate: (content: any) => {
      console.log(content);
    },
  });

  return (
    <div>
      <EditorContent
        editor={editor}
        className='h-20 p-5'
        onChange={(content) => {
          console.log(content);
        }}
      />
    </div>
  );
};

export default Editor;
