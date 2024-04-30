import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'
import SideBar from '../SideBar'
import Header from '../Header'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import {
  RoutePage,
  NavLink,
  TrendingPage,
  RouteHeader,
  RouteHeaderIcon,
  RouteHeaderH1,
  TrendingVideosCotainer,
  TrendingVideoCard,
  TrendingVideoImg,
  TrendingVideoH1,
  TrendingVideoBio,
  TrendingVideoViewsContainer,
  TrendingVideoP,
} from './styledComponents'

const apiStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {trendingApiStatus: apiStates.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendingApiStatus: apiStates.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const db = await response.json()
    const updatedTrendingVideosList = db.videos.map(each => ({
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    if (response.ok) {
      this.setState({
        trendingApiStatus: apiStates.success,
        trendingVideosList: updatedTrendingVideosList,
      })
    } else {
      this.setState({trendingApiStatus: apiStates.failure})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  getTrendingContent = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight} = value
        const {trendingVideosList} = this.state
        return (
          <TrendingVideosCotainer>
            {trendingVideosList.map(each => (
              <TrendingVideoCard>
                <NavLink to={`/videos/${each.id}`}>
                  <TrendingVideoImg
                    src={each.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <TrendingVideoBio>
                    <TrendingVideoH1 isThemeLight={isThemeLight}>
                      {each.title}
                    </TrendingVideoH1>
                    <TrendingVideoP isThemeLight={isThemeLight}>
                      {each.channel.name}
                    </TrendingVideoP>
                    <TrendingVideoViewsContainer>
                      <TrendingVideoP>{each.viewCount} Views</TrendingVideoP>
                      <BsDot size={20} color="#475569" />
                      <TrendingVideoP>
                        {formatDistanceToNow(new Date(each.publishedAt))}
                      </TrendingVideoP>
                    </TrendingVideoViewsContainer>
                  </TrendingVideoBio>
                </NavLink>
              </TrendingVideoCard>
            ))}
          </TrendingVideosCotainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendingContent = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case apiStates.success:
        return this.getTrendingContent()
      case apiStates.loading:
        return <LoadingView />
      case apiStates.failure:
        return <FailureView onClickRetry={this.onClickRetry} />
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
                <TrendingPage
                  data-testid="trending"
                  isThemeLight={isThemeLight}
                >
                  <RouteHeader isThemeLight={isThemeLight} data-testid="banner">
                    <RouteHeaderIcon isThemeLight={isThemeLight}>
                      <HiFire size={40} color="#ff0000" />
                    </RouteHeaderIcon>
                    <RouteHeaderH1 isThemeLight={isThemeLight}>
                      Trending
                    </RouteHeaderH1>
                  </RouteHeader>
                  {this.renderTrendingContent()}
                </TrendingPage>
              </RoutePage>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
