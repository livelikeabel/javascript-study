import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
  <div>Hello Server side render</div>
);

console.log(html);
