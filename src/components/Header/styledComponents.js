import styled from 'styled-components'

export const Navbar = styled.nav`
  background-color: ${props =>
    props.isThemeLight === true ? '#ffffff' : '#212121'};
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  height: 34px;
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 30px;
  margin-left: 30px;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid
    ${props => (props.isThemeLight === true ? '#3b82f6' : '#f9f9f9')};
  color: ${props => (props.isThemeLight === true ? '#3b82f6' : '#f9f9f9')};
  height: 30px;
  width: 80px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 18px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
`
export const PopupContainer = styled.div`
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#181818'};
  padding: 40px;
  border: none;
  border-radius: 10px;
`
export const PopupH1 = styled.p`
  color: ${props => (props.isThemeLight === true ? ' #00306e' : '#f4f4f4')};
  font-size: 16px;
  margin-bottom: 40px;
  font-weight: 500;
`

export const PopupButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
`
export const PopupCancelBtn = styled.button`
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#181818'};
  border: 0.5px solid
    ${props => (props.isThemeLight === true ? '#7e858e' : '#94a3b8')};
  color: ${props => (props.isThemeLight === true ? '#7e858e' : '#94a3b8')};
  height: 40px;
  width: 100px;
`
export const PopupConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  height: 40px;
  width: 100px;
  border: none;
`
