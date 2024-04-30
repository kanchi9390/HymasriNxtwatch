import styled from 'styled-components'

export const VideosDetailsPage = styled.div`
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#0f0f0f'};
  min-height: 100%;
  width: 100%;
  padding: 20px 40px;
  overflow-y: auto;
`
export const VideoDetailsTitle = styled.p`
  color: ${props => (props.isThemeLight === true ? '#0f0f0f' : '#ffffff')};
  font-size: 17px;
  font-weight: 500;
  margin-top: 20px;
`
export const VideoDetailsP = styled.p`
  color: #475569;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isThemeLight === true ? '#475569' : '#94a3b8')};
`

export const VideoDetailsViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.isThemeLight === true ? '#475569' : '#94a3b8')};
`
export const VideoDetailsViewsContainer = styled.div`
  color: ${props => (props.isThemeLight === true ? '#475569' : '#94a3b8')};
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoDetailsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoDetailsLike = styled.button`
  color: ${props => (props.active === true ? '#2563eb' : '#64748b')};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  margin-right: 15px;
  background-color: transparent;
  border: none;
`
export const Hline = styled.hr`
  color: ${props => (props.isThemeLight === true ? '#475569' : '#94a3b8')};
  width: 100%;
  border: 0.8px solid
    ${props => (props.isThemeLight === true ? '#cccccc' : '#94a3b8')};
`
export const VideoDetailsChannelBioContainer = styled.div`
  display: flex;
  padding: 0px;
  flex-direction: row;
  width: 24vw;
  height: 25vh;
  width: 100%;
`
export const VideoDetailsChannelProfileImg = styled.img`
  height: 35px;
  width: 35px;
  margin-top: 15px;
  margin-right: 11px;
`
export const VideoDetailsBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`

export const VideoDetailsChannelName = styled.p`
  color: ${props => (props.isThemeLight === true ? '#0f0f0f' : '#f9f9f9')};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 1;
`

export const VideoDetailsSubscriberCount = styled.p`
  color: ${props => (props.isThemeLight === true ? '#475569' : '#94a3b8')};
  font-size: 12px;
  margin: 0px;
  line-height: 1;
`
export const VideoDetailsDescription = styled.p`
  color: ${props => (props.isThemeLight === true ? '#64748b' : '#ffffff')};
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  width: 100%;
`
