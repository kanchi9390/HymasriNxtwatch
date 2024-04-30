import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SiderBar from '../SideBar'

import {
  HomePage,
  VideosContainer,
  NoVideosContainer,
  NoVideosH1,
  NoVideosImg,
  NoVideosP,
} from '../Home/styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const notFoundImg =
        isThemeLight === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <HomePage>
            <SiderBar />
            <VideosContainer isThemeLight={isThemeLight}>
              <NoVideosContainer isThemeLight={isThemeLight}>
                <NoVideosImg src={notFoundImg} alt="not found" />
                <NoVideosH1 isThemeLight={isThemeLight}>
                  Page Not Found
                </NoVideosH1>
                <NoVideosP isThemeLight={isThemeLight}>
                  We are sorry, the page you requested could not be found.
                </NoVideosP>
              </NoVideosContainer>
            </VideosContainer>
          </HomePage>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
