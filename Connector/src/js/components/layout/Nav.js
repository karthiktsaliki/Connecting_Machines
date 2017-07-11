import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const HomeClass = location.pathname === "/" ? "active" : "";
    const AssistantClass = location.pathname.match(/^\/assistant/) ? "active" : "";
    const ContributeClass = location.pathname.match(/^\/contribute/) ? "active" : "";
    const AboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={HomeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={AssistantClass}>
                <Link to="assistant" onClick={this.toggleCollapse.bind(this)}>Assistant</Link>
              </li>
              <li class={ContributeClass}>
                <Link to="contribute" onClick={this.toggleCollapse.bind(this)}>Contribute</Link>
              </li>
              <li class={AboutClass}>
              	<Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
