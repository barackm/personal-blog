import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import CodeIcon from '@mui/icons-material/Code';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export const getEditorTopBarItems = (editor: any) => [
  {
    type: 'button',
    label: 'Bold',
    icon: () => <FormatBoldIcon />,
    onClick: () => {
      editor?.chain().focus().toggleBold().run();
    },
    isActive: editor?.isActive('bold'),
    className: '',
  },
  {
    type: 'button',
    label: 'Italic',
    icon: () => <FormatItalicIcon />,
    onClick: () => {
      editor?.chain().focus().toggleItalic().run();
    },
    isActive: editor?.isActive('italic'),
    className: '',
  },

  {
    type: 'button',
    label: 'Code',
    icon: () => <CodeIcon />,
    onClick: () => {
      editor?.chain().focus().toggleCode().run();
    },
    isActive: editor?.isActive('code'),
    className: '',
  },
  // {
  //   type: 'button',
  //   label: 'Clear marks',
  //   icon: () => 'mark',
  //   onClick: () => {
  //     editor?.chain().focus().unsetAllMarks().run();
  //   },
  //   isActive: editor?.isActive('mark'),
  //   className: '',
  // },
  {
    type: 'button',
    label: 'Clear nodes',
    icon: () => <FormatClearIcon />,
    onClick: () => {
      editor?.chain().focus().clearNodes().run();
    },
    isActive: editor?.isActive('mark'),
    className: '',
  },
  {
    type: 'button',
    label: 'Paragraph',
    icon: () => <AlignHorizontalLeftIcon />,
    onClick: () => {
      editor?.chain().focus().setParagraph().run();
    },
    isActive: editor?.isActive('paragraph'),
    className: '',
  },
  {
    type: 'button',
    label: 'Heading 1',
    icon: () => 'H1',
    onClick: () => {
      editor?.chain().focus().toggleHeading({ level: 1 }).run();
    },
    isActive: editor?.isActive('heading', { level: 1 }),
    className: '',
  },
  {
    type: 'button',
    label: 'Heading 2',
    icon: () => 'H2',
    onClick: () => {
      editor?.chain().focus().toggleHeading({ level: 2 }).run();
    },
    isActive: editor?.isActive('heading', { level: 2 }),
    className: '',
  },
  {
    type: 'button',
    label: 'Heading 3',
    icon: () => 'H3',
    onClick: () => {
      editor?.chain().focus().toggleHeading({ level: 3 }).run();
    },
    isActive: editor?.isActive('heading', { level: 3 }),
    className: '',
  },
  {
    type: 'button',
    label: 'Heading 4',
    icon: () => 'H4',
    onClick: () => {
      editor?.chain().focus().toggleHeading({ level: 4 }).run();
    },
    isActive: editor?.isActive('heading', { level: 4 }),
  },
  {
    type: 'button',
    label: 'Heading 5',
    icon: () => 'H5',
    onClick: () => {
      editor?.chain().focus().toggleHeading({ level: 5 }).run();
    },
    isActive: editor?.isActive('heading', { level: 5 }),
  },
  {
    type: 'button',
    label: 'Heading 6',
    icon: () => 'H6',
    onClick: () => {
      editor?.chain().focus().toggleHeading({ level: 6 }).run();
    },
    isActive: editor?.isActive('heading', { level: 6 }),
  },
  {
    type: 'button',
    label: 'Bullet list',
    icon: () => <FormatListBulletedIcon />,
    onClick: () => {
      editor?.chain().focus().toggleBulletList().run();
    },
    isActive: editor?.isActive('bulletList'),
    className: '',
  },
  {
    type: 'button',
    label: 'Ordered list',
    icon: () => <FormatListNumberedIcon />,
    onClick: () => {
      editor?.chain().focus().toggleOrderedList().run();
    },
    isActive: editor?.isActive('orderedList'),
    className: '',
  },
  {
    type: 'button',
    label: 'Code block',
    icon: () => <IntegrationInstructionsIcon />,
    onClick: () => {
      editor?.chain().focus().toggleCodeBlock().run();
    },
    isActive: editor?.isActive('codeBlock'),
    className: '',
  },
  {
    type: 'button',
    label: 'Blockquote',
    icon: () => 'blockquote',
    onClick: () => {
      editor?.chain().focus().toggleBlockquote().run();
    },
    isActive: editor?.isActive('blockquote'),
    className: '',
  },
  {
    type: 'button',
    label: 'Horizontal rule',
    icon: () => 'horizontalRule',
    onClick: () => {
      editor?.chain().focus().setHorizontalRule().run();
    },
    isActive: editor?.isActive('horizontalRule'),
    className: '',
  },
  {
    type: 'button',
    label: 'Hard break',
    icon: () => 'hardBreak',
    onClick: () => {
      editor?.chain().focus().setHardBreak().run();
    },
    isActive: editor?.isActive('hardBreak'),
    className: '',
  },
  {
    type: 'button',
    label: 'Undo',
    icon: () => 'undo',
    onClick: () => {
      editor?.chain().focus().undo().run();
    },
    isActive: editor?.isActive('undo'),
    className: '',
  },
  {
    type: 'button',
    label: 'Redo',
    icon: () => 'redo',
    onClick: () => {
      editor?.chain().focus().redo().run();
    },
    isActive: editor?.isActive('redo'),
    className: '',
  },
];
