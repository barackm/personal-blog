import {
  BubbleMenu,
  EditorContent,
  FloatingMenu,
  useEditor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import Typography from '@tiptap/extension-typography';
import InlineMenu from './InlineMenu';
import styles from '../../styles/Editor.module.scss';

type EditorProps = {
  onChange: (content: any) => void;
  value: any;
  label?: string;
  placeholder?: string;
};

const Editor = (props: EditorProps) => {
  const { onChange, value, label, placeholder } = props;
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: value,
    onUpdate: (content: any) => {
      const { editor } = content;
      onChange(editor);
    },
  });
  return (
    <div>
      <div>
        <label className='block text-3xl font-medium mb-2'>{label}</label>
      </div>
      <div className={`${styles.editor}`}>
        <EditorContent
          editor={editor}
          placeholder={placeholder}
          // style={style}
          onChange={(content) => {
            console.log(content);
          }}
          autoFocus={true}
        />
      </div>
      {/* <InlineMenu editor={editor} /> */}
    </div>
  );
};

export default Editor;
