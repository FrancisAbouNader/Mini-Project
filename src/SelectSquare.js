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
  style = {
    backgroundColor: "red",
  };

  handleChange() {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  }
  render() {
    return (
      <div
        className="card"
        onClick={this.handleChange}
        style={
          this.state.isSelected
            ? { backgroundColor: "blue" }
            : { backgroundColor: this.props.color }
        }
      />
    );
  }
}
