import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetailsView from './components/VideoDetailsView'
import SavedVideos from './components/SavedVideos'
import Login from './components/Login'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isThemeLight: true,
    activeTab: 'Home',
    likedVideosList: [],
    dislikedVideosList: [],
    savedVideosList: [],
  }

  onChangeTheme = () => {
    this.setState(prev => ({isThemeLight: !prev.isThemeLight}))
  }

  onChangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  onLike = id => {
    const {likedVideosList, dislikedVideosList} = this.state
    const isInLikedList = likedVideosList.find(each => each === id)
    if (isInLikedList === undefined) {
      const isInDislikedList = dislikedVideosList.find(each => each === id)
      if (isInDislikedList === undefined) {
        this.setState({likedVideosList: [...likedVideosList, `${id}`]})
      } else {
        const updatedDislikedVideosList = dislikedVideosList.filter(
          each => each !== id,
        )
        this.setState({
          dislikedVideosList: updatedDislikedVideosList,
          likedVideosList: [...likedVideosList, `${id}`],
        })
      }
    } else {
      const updatedLikedVideosList = likedVideosList.filter(each => each !== id)
      this.setState({likedVideosList: updatedLikedVideosList})
    }
  }

  onDislike = id => {
    const {likedVideosList, dislikedVideosList} = this.state
    const isInDislikedList = dislikedVideosList.find(each => each === id)
    if (isInDislikedList === undefined) {
      const isInLikedList = likedVideosList.find(each => each === id)
      if (isInLikedList === undefined) {
        this.setState({dislikedVideosList: [...dislikedVideosList, `${id}`]})
      } else {
        const updatedLikedVideosList = likedVideosList.filter(
          each => each !== id,
        )
        this.setState({
          likedVideosList: updatedLikedVideosList,
          dislikedVideosList: [...dislikedVideosList, `${id}`],
        })
      }
    } else {
      const updatedDislikedVideosList = dislikedVideosList.filter(
        each => each !== id,
      )
      this.setState({dislikedVideosList: updatedDislikedVideosList})
    }
  }

  onSave = object => {
    const {savedVideosList} = this.state
    const isInSavedVideosList = savedVideosList.find(
      each => each.id === object.id,
    )
    if (isInSavedVideosList === undefined) {
      this.setState({savedVideosList: [...savedVideosList, object]})
    } else {
      const updatedSavedVideosList = savedVideosList.filter(
        each => each.id !== object.id,
      )
      this.setState({savedVideosList: updatedSavedVideosList})
    }
  }

  render() {
    const {isThemeLight, likedVideosList, dislikedVideosList, savedVideosList} =
      this.state
    console.log(savedVideosList)

    return (
      <NxtWatchContext.Provider
        value={{
          isThemeLight,
          onChangeTheme: this.onChangeTheme,
          onChangeActiveTab: this.onChangeActiveTab,
          onLike: this.onLike,
          onDislike: this.onDislike,
          onSave: this.onSave,
          likedVideosList,
          dislikedVideosList,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
