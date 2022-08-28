import React from 'react';
import Editor from '../../Components/Editor/Editor';
import Page from '../../Components/Page/Page';

const NewBlog = () => {
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');
  const handleChange = (content: any) => {
    const html = content.getHTML();
    setContent(html);
  };

  const handleTitleChange = (title: any) => {
    const html = title.getHTML();
    setTitle(html);
  };

  console.log(title);
  return (
    <Page>
      <div>
        <div className='flex-col'>
          <div className=''>
            <Editor
              onChange={handleTitleChange}
              value={title}
              label='Blog Title'
              placeholder='Title...'
            />
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <div className='flex-col'>
          <div className=''>
            <Editor
              onChange={handleChange}
              value={content}
              label='Content'
              placeholder='Title...'
            />
          </div>
        </div>
      </div>
      {/* display pased html */}
      <div className='flex-col'>
        <div className=''>
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      </div>
    </Page>
  );
};

export default NewBlog;
