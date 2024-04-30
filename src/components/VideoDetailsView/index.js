import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import SideBar from '../SideBar'
import Header from '../Header'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import {RoutePage} from '../Trending/styledComponents'

import {
  VideosDetailsPage,
  VideoDetailsTitle,
  VideoDetailsViewsLikesContainer,
  VideoDetailsViewsContainer,
  VideoDetailsP,
  VideoDetailsLikesContainer,
  VideoDetailsLike,
  Hline,
  VideoDetailsChannelBioContainer,
  VideoDetailsChannelProfileImg,
  VideoDetailsBioContainer,
  VideoDetailsChannelName,
  VideoDetailsSubscriberCount,
  VideoDetailsDescription,
} from './styledComponents'

const apiStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoDetailsView extends Component {
  state = {videosDetailsPageStatus: apiStates.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      videosDetailsPageStatus: apiStates.loading,
      videoDetailsObject: {},
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const db = await response.json()
    const videoD = db.video_details
    const updatedVideoDetails = {
      channel: {
        name: videoD.channel.name,
        profileImageUrl: videoD.channel.profile_image_url,
        subscriberCount: videoD.channel.subscriber_count,
      },
      description: videoD.description,
      id: videoD.id,
      publishedAt: videoD.published_at,
      thumbnailUrl: videoD.thumbnail_url,
      videoUrl: videoD.video_url,
      title: videoD.title,
      viewCount: videoD.view_count,
    }
    if (response.ok) {
      this.setState({
        videoDetailsObject: updatedVideoDetails,
        videosDetailsPageStatus: apiStates.success,
      })
    } else {
      this.setState({videosDetailsPageStatus: apiStates.failure})
    }
  }

  getVideoDetailsContent = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isThemeLight,
          onLike,
          likedVideosList,
          onDislike,
          dislikedVideosList,
          onSave,
          savedVideosList,
        } = value
        const {videoDetailsObject} = this.state
        const {
          channel,
          title,
          description,
          videoUrl,
          publishedAt,
          viewCount,
          id,
        } = videoDetailsObject

        const onClickLike = () => {
          onLike(id)
        }

        const onClickDislike = () => {
          onDislike(id)
        }

        const onClickSave = () => {
          onSave(videoDetailsObject)
        }

        const {name, profileImageUrl, subscriberCount} = channel

        const likeVideoId = likedVideosList.find(each => each === id)
        const isLiked = likeVideoId !== undefined

        const dislikeVideoId = dislikedVideosList.find(each => each === id)
        const isDisliked = dislikeVideoId !== undefined

        const savedVideoId = savedVideosList.find(each => each.id === id)
        const isSavedVideo = savedVideoId !== undefined

        console.log(isSavedVideo)
        return (
          <>
            <ReactPlayer url={videoUrl} width="90%" height="60vh" />
            <VideoDetailsTitle isThemeLight={isThemeLight}>
              {title}
            </VideoDetailsTitle>
            <VideoDetailsViewsLikesContainer isThemeLight={isThemeLight}>
              <VideoDetailsViewsContainer isThemeLight={isThemeLight}>
                <VideoDetailsP isThemeLight={isThemeLight}>
                  {viewCount} Views
                </VideoDetailsP>
                <BsDot size={20} />
                <VideoDetailsP isThemeLight={isThemeLight}>
                  {formatDistanceToNow(new Date(publishedAt))}
                </VideoDetailsP>
              </VideoDetailsViewsContainer>
              <VideoDetailsLikesContainer>
                <VideoDetailsLike
                  isThemeLight={isThemeLight}
                  onClick={onClickLike}
                  active={isLiked}
                >
                  <BiLike size={20} /> {'  '}Like
                </VideoDetailsLike>
                <VideoDetailsLike
                  isThemeLight={isThemeLight}
                  onClick={onClickDislike}
                  active={isDisliked}
                >
                  <BiDislike size={20} /> {'  '}Dislike
                </VideoDetailsLike>
                <VideoDetailsLike
                  isThemeLight={isThemeLight}
                  onClick={onClickSave}
                  active={isSavedVideo}
                >
                  <BiListPlus size={20} /> {'  '}
                  {isSavedVideo ? 'Saved' : 'Save'}
                </VideoDetailsLike>
              </VideoDetailsLikesContainer>
            </VideoDetailsViewsLikesContainer>
            <Hline isThemeLight={isThemeLight} />
            <VideoDetailsChannelBioContainer>
              <VideoDetailsChannelProfileImg
                src={profileImageUrl}
                alt="channel logo"
              />
              <VideoDetailsBioContainer>
                <VideoDetailsChannelName isThemeLight={isThemeLight}>
                  {name}
                </VideoDetailsChannelName>
                <VideoDetailsSubscriberCount isThemeLight={isThemeLight}>
                  {subscriberCount} subscribers
                </VideoDetailsSubscriberCount>
                <VideoDetailsDescription isThemeLight={isThemeLight}>
                  {description}
                </VideoDetailsDescription>
              </VideoDetailsBioContainer>
            </VideoDetailsChannelBioContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoDetailsContent = () => {
    const {videosDetailsPageStatus} = this.state
    switch (videosDetailsPageStatus) {
      case apiStates.success:
        return this.getVideoDetailsContent()
      case apiStates.loading:
        return <LoadingView />
      case apiStates.failure:
        return <FailureView />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value
          return (
            <>
              <Header />
              <RoutePage isThemeLight={isThemeLight}>
                <SideBar />
                <VideosDetailsPage
                  isThemeLight={isThemeLight}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoDetailsContent()}
                </VideosDetailsPage>
              </RoutePage>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoDetailsView
