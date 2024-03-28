import React from 'react';

const BlogPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome Blog</h1>
      {/* <p className="text-lg mb-4">Welcome to my blog where I write about various topics.</p> */}
      <p className="text-gray-600 mb-4">Date: March 28, 2024</p>

      <div className="bg-black rounded-lg shadow-md ">
        {/* <h2 className="text-xl font-semibold mb-4">Motivation</h2> */}
        <p className="text-lg mb-4">My motivation mainly came from reading <a href="https://www.paulgraham.com/articles.html" target="_blank" className="underline">Paul Graham</a>. 
        He is kinda awesome, or his writing style is so simple and easy to comprehend for someone whose native language is not English. Also this <a className='underline' target='_blank' href="https://sites.google.com/site/steveyegge2/you-should-write-blogs">Steve Yegge's blog</a> had a hand in this initiative.
        </p>
      </div>

      <div className="bg-black rounded-lg shadow-md  mt-8">
        <h2 className="text-xl font-semibold mb-4">What will I write about?</h2>
        <p className="text-lg mb-4">I will generally write about my programming projects but I also intend to write about my other non-technical experience which I want to share with the world. I consider myself someone who is full of ideas (Sometimes they are just stupid ;p) so I will also write about those ideas here.</p>
      </div>

      <div className="bg-black rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold mb-4">How was this website made?</h2>
        <p className="text-lg mb-4">This website is result of 2 hours of hard work, actually I don't know the exact time, its 5:30 in the morning. The stack is NextJS tho, because its fast and easy to host. Also lots of  pre-built functionality and I really like the routing method of nextjs (its really good for bloging). 
        The amazing UI you see is the hardwork of <a className='underline' href="https://twitter.com/mannupaaji">Mannu Paaji</a>, he is a crazy dude, do check out his <a className='underline' href="https://ui.aceternity.com/components">UI library</a></p>
      </div>
      {/* <p className='text-lg mb-4'>At last I will write here what is at the top of my mind at a particular moment, I don't expect crowd of million people nor I am going to pay vercel for it but I will attempt to create quality blogs. Welcome aboard my friend, you read it till last.</p> */}
      <p className='text-lg mb-4'>At last, I will write here what is at the top of my mind at a particular moment. I don't expect a crowd of a million people, nor am I going to pay Vercel for it, but I will attempt to create quality blogs. Welcome aboard, my friend; you've read it till the last.</p>
      <p className='text-lg mb-4'>Btw at the point of writing this blog, I am pre-final year under-graduat in IIT Roorkee, from Production and Industrial Branch. My interest tho doesn't lie in my core. I am part of <a href="https://mdgspace.org/" className='underline'> MDG Space</a> and <a href="https://www.iitr.ac.in/acm/" className='underline'>ACM IIT Roorkee</a>. <br /> <br /> <a href="www.linkedin.com/in/ayush~chaudhary" className='underline'>My linkedIn</a> in case you want to offer me a job :)</p>
    
    </div>
  );
};

export default BlogPage;
