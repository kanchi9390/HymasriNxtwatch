import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 90vw;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 25vw;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`

export const VideoThumbnail = styled.img`
  width: 340px;
  height: 200px;
`
export const ChannelBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  width: 24vw;
  height: 25vh;
`
export const ChannelProfileImg = styled.img`
  height: 35px;
  width: 35px;
  margin-top: 15px;
  margin-right: 11px;
`
export const VideoBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`

export const VideoBioText = styled.p`
  color: ${props => (props.isThemeLight === true ? '#0f0f0f' : '#f9f9f9')};
  font-size: 15px;
  margin-bottom: 5px;
`

export const ChannelName = styled.p`
  color: #475569;
  font-size: 15px;
  margin: 5px;
  line-height: 1.5;
`

export const VideoViews = styled.p`
  color: #475569;
  font-size: 15px;
  margin: 5px;
  line-height: 1.5;
`
