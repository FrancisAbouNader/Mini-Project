import React, { Component } from "react";
import "./selectSquare.css";

export default class SelectSquare extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  }
  render() {
    console.log(this.state.isSelected);
    return (
      <div
        className="card"
        onClick={this.handleChange}
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
}
