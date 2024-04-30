import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'

import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SiderBar from '../SideBar'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import {
  HomePage,
  HomeContent,
  Banner,
  BannerLeft,
  BannerImg,
  BannerText,
  CloseButton,
  BannerBtn,
  VideosContainer,
  SearchBarContainer,
  SearchButton,
  SearchInput,
  VideosListContainer,
  NoVideosContainer,
  NoVideosImg,
  NoVideosH1,
  NoVideosP,
  NoVideosBtn,
} from './styledComponents'

const apiStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    homeApiStatus: apiStates.initial,
    showBanner: true,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getHomeContent()
  }

  getHomeContent = async () => {
    this.setState({homeApiStatus: apiStates.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const db = await response.json()
    const updatedVideosList = db.videos.map(each => ({
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
        videosList: updatedVideosList,
        homeApiStatus: apiStates.success,
      })
    } else {
      this.setState({homeApiStatus: apiStates.failure})
    }
  }

  onClickRetry = () => {
    this.getHomeContent()
  }

  getVideosContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeLight} = value
        const {videosList} = this.state
        const isListEmpty = videosList.length === 0
        if (isListEmpty) {
          return (
            <NoVideosContainer>
              <NoVideosImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideosH1 isThemeLight={isThemeLight}>
                No Search results found
              </NoVideosH1>
              <NoVideosP isThemeLight={isThemeLight}>
                Try different key words or remove search filter
              </NoVideosP>
              <NoVideosBtn onClick={this.onClickRetry}>Retry</NoVideosBtn>
            </NoVideosContainer>
          )
        }
        return (
          <>
            <VideosListContainer>
              {videosList.map(each => (
                <VideoCard videoDetails={each} key={each.id} />
              ))}
            </VideosListContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickSearch = () => {
    this.getHomeContent()
  }

  renderHomeContent = () => {
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case apiStates.success:
        return this.getVideosContainer()
      case apiStates.loading:
        return <LoadingView />
      case apiStates.failure:
        return <FailureView onClickRetry={this.onClickRetry} />
      default:
        return null
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value
          const {showBanner, searchInput} = this.state
          return (
            <>
              <Header />
              <HomePage>
                <SiderBar />
                <HomeContent data-testid="home" isThemeLight={isThemeLight}>
                  {showBanner && (
                    <Banner showBanner={showBanner} data-testid="banner">
                      <BannerLeft>
                        <BannerImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText isThemeLight={isThemeLight}>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerBtn>GET IT NOW</BannerBtn>
                      </BannerLeft>
                      <CloseButton
                        onClick={this.closeBanner}
                        data-testid="close"
                      >
                        <IoMdClose size={20} />
                      </CloseButton>
                    </Banner>
                  )}
                  <VideosContainer isThemeLight={isThemeLight}>
                    <SearchBarContainer>
                      <SearchInput
                        placeholder="Search"
                        type="search"
                        onChange={this.onChangeSearchInput}
                        isThemeLight={isThemeLight}
                        value={searchInput}
                      />
                      <SearchButton
                        isThemeLight={isThemeLight}
                        onClick={this.onClickSearch}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch
                          size={16}
                          color={`${isThemeLight === true ? '' : '#909090'}`}
                        />
                      </SearchButton>
                    </SearchBarContainer>
                    {this.renderHomeContent()}
                  </VideosContainer>
                </HomeContent>
              </HomePage>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
