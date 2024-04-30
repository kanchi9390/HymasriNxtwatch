import {Component} from 'react'

import {BsDot} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'
import SideBar from '../SideBar'
import Header from '../Header'

import {
  RoutePage,
  RouteHeader,
  RouteHeaderIcon,
  RouteHeaderH1,
  TrendingPage,
  TrendingVideosCotainer,
  TrendingVideoCard,
  NavLink,
  TrendingVideoImg,
  TrendingVideoBio,
  TrendingVideoH1,
  TrendingVideoViewsContainer,
  TrendingVideoP,
} from '../Trending/styledComponents'

import {
  NoVideosContainer,
  NoVideosH1,
  NoVideosImg,
  NoVideosP,
} from '../Home/styledComponents'

class SavedVideos extends Component {
  getSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight, savedVideosList} = value
        return (
          <>
            <TrendingPage data-testid="savedVideos" isThemeLight={isThemeLight}>
              <RouteHeader isThemeLight={isThemeLight} data-testid="banner">
                <RouteHeaderIcon isThemeLight={isThemeLight}>
                  <HiFire size={40} color="#ff0000" />
                </RouteHeaderIcon>
                <RouteHeaderH1 isThemeLight={isThemeLight}>
                  Saved Videos
                </RouteHeaderH1>
              </RouteHeader>
              <TrendingVideosCotainer>
                {savedVideosList.map(each => (
                  <TrendingVideoCard key={each.id}>
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
                          <TrendingVideoP>
                            {each.viewCount} Views
                          </TrendingVideoP>
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
            </TrendingPage>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getNoSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosH1 isThemeLight={isThemeLight}>
              No saved videos found
            </NoVideosH1>
            <NoVideosP isThemeLight={isThemeLight}>
              You can save your videos while watching them
            </NoVideosP>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight, savedVideosList} = value
          return (
            <>
              <Header />
              <RoutePage isThemeLight={isThemeLight}>
                <SideBar />
                {savedVideosList.length === 0
                  ? this.getNoSavedVideos()
                  : this.getSavedVideos()}
              </RoutePage>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
