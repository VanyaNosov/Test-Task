import React from 'react';
import style from './index.css'
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.header}>
        <h1 className={style.logo}>Test <span className={style.logo_text_color}>Task</span></h1>
        <div className={style.item_block}>
          <NavLink to="/" className={style.item}>HOME</NavLink>
          <NavLink to="/news" className={style.item}>NEWS</NavLink>
          <NavLink to="/profile" className={style.item}>PROFILE</NavLink>
        </div>
      </div>
    )
  }
}

export default Header;