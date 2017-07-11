import React from "react";

import Article from "../components/Article";

export default class Assistant extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Assistant</h1>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
