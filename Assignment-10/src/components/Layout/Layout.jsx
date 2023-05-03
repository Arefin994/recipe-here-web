import React from "react";

const Layout = ({ nav, content, footer }) => {
  return (
    <div>
      {nav}
      {content}
      {footer}
    </div>
  );
};

export default Layout;
