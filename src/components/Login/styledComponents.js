import styled from 'styled-components'

export const LoginPage = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#212121'};
  font-family: 'Roboto';
`

export const LoginCard = styled.div`
  background-color: ${props =>
    props.isThemeLight === true ? '#ffffff' : '#000000'};
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: none;
  box-shadow: 0px 4px 16px 0px
    ${props => (props.isThemeLight === true ? '#bfbfbf' : '')};
  border-radius: 8px;
  width: 90vw;
  height: 60vh;
  @media screen and (min-width: 768px) {
    width: 30vw;
    height: 55vh;
    padding: 30px;
  }
`
export const LoginImg = styled.img`
  width: 150px;
  height: 34px;
  align-self: center;
  margin-bottom: 35px;
`
export const InputEleLabel = styled.label`
  color: ${props => (props.isThemeLight === true ? '#616e7c' : '#f4f4f4')};
  font-size: 11px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 6px;
`

export const InputElement = styled.input`
  background-color: transparent;
  border: 0.5px solid #94a3b8;
  width: 100%;
  height: 38px;
  border-radius: 3px;
  padding: 20px;
  font-weight: 500;
  color: ${props => (props.isThemeLight === true ? '#000000' : '#ffffff')};
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`

export const ShowPasswordEl = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`

export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isThemeLight === true ? '#181818' : '#f9f9f9')};
`

export const LoginBtn = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  height: 42px;
  margin-top: 35px;
  font-weight: 600;
  font-size: 15px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  margin: 0px;
`
