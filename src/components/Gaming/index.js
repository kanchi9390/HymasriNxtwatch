import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import SideBar from '../SideBar'
import Header from '../Header'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import {NavLink} from '../VideoCard/styledComponents'

import {
  RoutePage,
  RouteHeader,
  RouteHeaderIcon,
  RouteHeaderH1,
} from '../Trending/styledComponents'

import {
  GamingPage,
  GamingVideosCotainer,
  GamingVideoCard,
  GamingVideoImg,
  GamingVideoBio,
  GamingVideoH1,
  GamingVideoP,
} from './styledComponents'

const apiStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {gamingApiStatus: apiStates.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({gamingApiStatus: apiStates.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const db = await response.json()
    const updatedGamingVideosList = db.videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    console.log(updatedGamingVideosList)
    if (response.ok) {
      this.setState({
        gamingApiStatus: apiStates.success,
        gamingVideosList: updatedGamingVideosList,
      })
    } else {
      this.setState({trendingApiStatus: apiStates.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  getGamingContent = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight} = value
        const {gamingVideosList} = this.state
        return (
          <GamingVideosCotainer>
            {gamingVideosList.map(each => (
              <GamingVideoCard>
                <NavLink to={`/videos/${each.id}`}>
                  <GamingVideoImg
                    src={each.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <GamingVideoBio>
                    <GamingVideoH1 isThemeLight={isThemeLight}>
                      {each.title}
                    </GamingVideoH1>
                    <GamingVideoP isThemeLight={isThemeLight}>
                      {each.viewCount} Watching Worldwide
                    </GamingVideoP>
                  </GamingVideoBio>
                </NavLink>
              </GamingVideoCard>
            ))}
          </GamingVideosCotainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGamingContent = () => {
    const {gamingApiStatus} = this.state
    switch (gamingApiStatus) {
      case apiStates.success:
        return this.getGamingContent()
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
                <GamingPage data-testid="gaming" isThemeLight={isThemeLight}>
                  <RouteHeader isThemeLight={isThemeLight} data-testid="banner">
                    <RouteHeaderIcon isThemeLight={isThemeLight}>
                      <SiYoutubegaming size={40} color="#ff0000" />
                    </RouteHeaderIcon>
                    <RouteHeaderH1 isThemeLight={isThemeLight}>
                      Gaming
                    </RouteHeaderH1>
                  </RouteHeader>
                  {this.renderGamingContent()}
                </GamingPage>
              </RoutePage>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
