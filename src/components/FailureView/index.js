import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeFailureView,
  HomeFailureImg,
  HomeFailureH1,
  HomeFailureP,
  HomeFailureBtn,
} from './styledComponents'

const FailureView = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const {onClickRetry} = props
      const homeFailureImg = isThemeLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      return (
        <HomeFailureView isThemeLight={isThemeLight}>
          <HomeFailureImg src={homeFailureImg} alt="failure view" />
          <HomeFailureH1 isThemeLight={isThemeLight}>
            Oops! Something Went Wrong
          </HomeFailureH1>
          <HomeFailureP isThemeLight={isThemeLight}>
            We are having some trouble to complete your request. Please try
            again.
          </HomeFailureP>
          <HomeFailureBtn onClick={onClickRetry}>Retry</HomeFailureBtn>
        </HomeFailureView>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FailureView
