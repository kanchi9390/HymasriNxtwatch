import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SiderBarContainer = styled.div`
  background-color: ${props =>
    props.isThemeLight === true ? '#ffffff' : '#212121'};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22vw;
`
export const SBTopCard = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0px;
  flex-direction: column;
  width: 100%;
`
export const SBTopRouteCard = styled.li`
  background-color: ${props =>
    props.activeTab === true
      ? props.isThemeLight === true
        ? 'rgb(242, 245, 248)'
        : '#424242'
      : 'transparent'};
  width: 100%;
  padding-left: 20px;
  display: flex;
  align-items: center;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`
export const SBTopRouteText = styled.p`
  color: ${props => (props.isThemeLight === true ? '#231f20' : '#f9f9f9')};
  font-size: 17px;
  margin-left: 24px;
  font-weight: ${props => (props.activeTab === true ? '700' : '400')};
`
export const SBBottomCard = styled.div`
  padding-left: 25px;
`
export const SBBottomCardH1 = styled.p`
  color: ${props => (props.isThemeLight === true ? '#000000' : '#ffffff')};
  font-size: 17px;
  font-weight: 700;
  line-height: 3;
`

export const SBBottomCardImgsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`

export const SBBottomCardImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const SBBottomCardH2 = styled.p`
  color: ${props => (props.isThemeLight === true ? '#000000' : '#ffffff')};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 40px;
`
