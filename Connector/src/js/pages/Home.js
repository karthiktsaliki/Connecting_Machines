import React from "react";

import Article from "../components/Article";

export default class Home extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );
    console.log("In Home page");
    return (
      <div>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
