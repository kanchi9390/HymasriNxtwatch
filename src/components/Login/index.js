import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginPage,
  LoginCard,
  LoginImg,
  InputEleLabel,
  InputElement,
  ShowPasswordContainer,
  ShowPasswordEl,
  ShowPasswordLabel,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitSuccess = jwtTkoken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtTkoken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showSubmitError,
      showPassword,
    } = this.state
    const showPasswordType = showPassword === false ? 'password' : 'text'
    const jwtTkoken = Cookies.get('jwt_token')
    if (jwtTkoken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value
          const loginLogo = isThemeLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginPage isThemeLight={isThemeLight} onSubmit={this.onClickLogin}>
              <LoginCard isThemeLight={isThemeLight}>
                <LoginImg
                  isThemeLight={isThemeLight}
                  src={loginLogo}
                  alt="website logo"
                />
                <InputEleLabel htmlFor="username" isThemeLight={isThemeLight}>
                  USERNAME
                </InputEleLabel>
                <InputElement
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                  value={username}
                  isThemeLight={isThemeLight}
                />
                <InputEleLabel htmlFor="password" isThemeLight={isThemeLight}>
                  PASSWORD
                </InputEleLabel>
                <InputElement
                  id="password"
                  type={showPasswordType}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  value={password}
                  isThemeLight={isThemeLight}
                />
                <ShowPasswordContainer>
                  <ShowPasswordEl
                    type="checkbox"
                    id="showpassword"
                    onChange={this.onChangeShowPassword}
                  />
                  <ShowPasswordLabel
                    isThemeLight={isThemeLight}
                    htmlFor="showpassword"
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginBtn>Login</LoginBtn>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginCard>
            </LoginPage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
