import React from 'react';
import Footer from '../Footer/Footer';
import './Blog.css';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='thm-bg-clr text-white mt-3' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <div className="container my-2">
          <div className="row">
            <div className="col">
              <div className="custom-bg p-4 mb-4 border-cstm shadow">
                <h4 className="thm-clr fw-bold border-cstm">Q1: Tell us the differences between uncontrolled and controlled components.</h4>
                <p><span className='fw-bold'>Ans:</span> Uncontrolled components are components where the form data is handled by the DOM itself, rather than the component. Uncontrolled components allow the DOM to handle the state of the form and its elements, and React simply listens for events to track changes. On the other hand, controlled components are components where the form data is handled by the React component, rather than the DOM. Controlled components manage the state of the form and its elements by using React's state, allowing for more control and validation of form data.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="custom-bg p-4 mb-4 border-cstm shadow">
                <h4 className="thm-clr fw-bold border-cstm">Q2: How to validate React props using PropTypes?</h4>
                <p><span className='fw-bold'>Ans:</span> PropTypes is a package built into React that allows you to validate the data types of props passed to components. PropTypes helps catch bugs early in the development process by providing a runtime check on the data types of the props passed to the components. PropTypes can be used to ensure that the correct data types are being passed down from parent components to child components, making it easier to catch and fix issues.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="custom-bg p-4 mb-4 border-cstm shadow">
                <h4 className="thm-clr fw-bold border-cstm">Q3: Tell us the difference between nodejs and express js.</h4>
                <p><span className='fw-bold'>Ans:</span> Node.js is a JavaScript runtime built on top of the V8 engine, which allows developers to run JavaScript on the server-side. Node.js provides a set of built-in modules and APIs that allow developers to build server-side applications. Express.js, on the other hand, is a popular framework built on top of Node.js that provides additional features and functionalities for building web applications, such as routing, middleware, and template engines.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="custom-bg p-4 mb-4 border-cstm shadow">
                <h4 className="thm-clr fw-bold border-cstm">Q4: What is a custom hook, and why will you create a custom hook?</h4>
                <p><span className='fw-bold'>Ans:</span> Custom hooks are a way to reuse stateful logic in React components. Custom hooks allow you to extract reusable logic from your components and use it across multiple components, making your code more modular and easier to maintain. Custom hooks can be used to encapsulate complex stateful logic, such as data fetching or form validation, and make it more accessible to other components. By creating custom hooks, you can abstract away complex logic and provide a simple and easy-to-use interface for other components to consume.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
