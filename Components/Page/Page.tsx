import React from 'react';

const Page = (props: { children: React.ReactNode; className?: string }) => {
  const { children, className } = props;
  return (
    <main className={`p-5 sm:p-[2rem] lg:p-[8rem] lg:pt-20 ${className || ''}`}>
      {children}
    </main>
  );
};

export default Page;
