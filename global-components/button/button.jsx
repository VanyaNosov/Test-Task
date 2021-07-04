import React from 'react';
import style from './button.css';
import { NavLink } from "react-router-dom";

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }
  render() {
    return (
      <button className={style.button} onClick={this.props.change} type="button">{this.props.text}</button>
    )
  }
}