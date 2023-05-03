import React from 'react';

const Blog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4">
            <h4 className="fw-bold">Q1: When should you use context API?</h4>
            <p><span className='fw-bold'>Ans:</span> Context API is useful when you need to pass data between components that are not directly connected in the component tree. It avoids the need to pass props down through multiple levels of components, which can become cumbersome and difficult to manage.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4">
            <h4 className="fw-bold">Q2: What is a custom hook?</h4>
            <p><span className='fw-bold'>Ans:</span> A custom hook is a function that allows you to reuse stateful logic across multiple components in a React application. It's a way to extract common logic into a separate function that can be imported and used in different components.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4">
            <h4 className="fw-bold">Q3: What is useRef?</h4>
            <p><span className='fw-bold'>Ans:</span> useRef is a hook in React that allows you to create a mutable variable that persists between renders. It's useful when you need to store a value that you want to access in multiple renders, such as a reference to a DOM element or a timer ID.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4">
            <h4 className="fw-bold">Q4: What is useMemo?</h4>
            <p><span className='fw-bold'>Ans:</span> useMemo is a hook in React that allows you to memoize a function's result, so that it only gets recalculated when the input values change. It's useful when you have a computationally expensive function that gets called frequently, but only needs to be recalculated when the input values change.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
