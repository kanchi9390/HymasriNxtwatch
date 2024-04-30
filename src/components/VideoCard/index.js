import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItem,
  NavLink,
  VideoThumbnail,
  ChannelBioContainer,
  ChannelProfileImg,
  VideoBioContainer,
  VideoBioText,
  ChannelName,
  VideoViews,
} from './styledComponents'

const VideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const {videoDetails} = props
      const {
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        id,
      } = videoDetails
      const {profileImageUrl, name} = channel
      const updatedPublishedAt = formatDistanceToNow(new Date(publishedAt))
      return (
        <VideoItem isThemeLight={isThemeLight}>
          <NavLink to={`/videos/${id}`}>
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <ChannelBioContainer>
              <ChannelProfileImg src={profileImageUrl} alt="channel logo" />
              <VideoBioContainer>
                <VideoBioText isThemeLight={isThemeLight}>{title}</VideoBioText>
                <ChannelName isThemeLight={isThemeLight}>{name}</ChannelName>
                <VideoViews isThemeLight={isThemeLight}>
                  {viewCount} Views . {updatedPublishedAt}
                </VideoViews>
              </VideoBioContainer>
            </ChannelBioContainer>
          </NavLink>
        </VideoItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoCard
