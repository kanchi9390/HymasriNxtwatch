import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const RoutePage = styled.div`
  display: flex;
  min-height: 80vh;
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#0f0f0f'};
  height: 90vh;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 0px;
  margin: 0px;
`

export const TrendingPage = styled.div`
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#0f0f0f'};
  padding: 0px;
  width: 100%;
  height: 70vh;
`
export const RouteHeader = styled.div`
  display: flex;
  background-color: ${props => (props.isThemeLight ? '#ebebeb' : '#181818')};
  align-items:center;
  padding-left 70px;
  width:100%;
  height:17vh;
`
export const RouteHeaderIcon = styled.div`
  background-color: ${props => (props.isThemeLight ? '#d7dfe9' : '#000000')};
  padding: 20px;
  border-radius: 40px;
  margin-right: 20px;
`
export const RouteHeaderH1 = styled.h1`
  color: ${props => (props.isThemeLight ? '#000000' : '#ffffff')};
`
export const TrendingVideosCotainer = styled.ul`
  display: flex;
  jsutify-content: ${props =>
    props.trendingApiStatus === 'SUCCESS' ? 'flex-start' : 'center'};
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  list-style-type: none;
  padding: 20px;
`

export const TrendingVideoCard = styled.li`
  background-color: transparent;
  display: flex;
  margin: 20px;
  padding: 20px;
`

export const TrendingVideoImg = styled.img`
  width: 35vw;
  margin-right: 20px;
  height: 35vh;
`

export const TrendingVideoH1 = styled.p`
  color: ${props => (props.isThemeLight === true ? '#0f0f0f' : '#ffffff')};
  font-size: 22px;
`

export const TrendingVideoBio = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingVideoViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TrendingVideoP = styled.p`
  color: #475569;
  font-size: 15px;
  margin: 5px;
  line-height: 1.5;
`
