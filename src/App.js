import React from "react";
import ReactDom from "react-dom";
import "./index.css";
// import "./index.less";
// import "./index.scss";

import img from './img/download.png'

const App = () => {
  return (
    <div>
       <img src={img} />
      <div>Hello React</div>
    </div>
  );
};
ReactDom.render(<App />, document.getElementById("root"));
export default App;
