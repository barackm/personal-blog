import React from 'react';
import Editor from '../../Components/Editor/Editor';
import Page from '../../Components/Page/Page';

const NewBlog = () => {
  return (
    <Page>
      <div>
        <div className='flex-col'>
          {/* title wrapper */}
          <div className=''>
            <Editor />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NewBlog;
