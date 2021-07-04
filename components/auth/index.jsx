import React from 'react';
import style from './auth.css';
import Button from '../../global-components/button/button.jsx'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.userData = {
      username: 'Admin',
      password: '12345',
    }
    this.state = {
      username: '',
      password: ''
    }
  }

  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  checkRegistration() {
    if (JSON.stringify(this.state) === JSON.stringify(this.userData)) {
      localStorage.setItem('authorization', 'true')
      this.props.history.push("/profile")
    } else {
      localStorage.setItem('authorization', 'false')
      alert('Имя пользователя или пароль введены неверно')
    }
  }

  render() {
    return (
      <form>
        <div className={style.sign_in_container}>
          <h1 className={style.tittle}>Sign-in</h1>
          <div className={style.registration_unit}>
            <input placeholder="username" className={style.entry_field} name="username" onChange={e => this.changeInput(e)} />
            <input placeholder="password" className={style.entry_field} name="password" onChange={e => this.changeInput(e)} />
          </div>
          <Button change={() => this.checkRegistration()} text={'sign in'} />
        </div>
      </form>
    )
  }
}

export default SignIn;

