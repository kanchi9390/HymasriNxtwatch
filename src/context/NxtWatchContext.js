import React from 'react'

const NxtWatchContext = React.createContext({
  isThemeLight: true,
  onChangeTheme: () => {},
  likedVideosList: [],
  onLike: () => {},
  dislikedVideosList: [],
  onDislike: () => {},
  savedVideosList: [],
  onSave: () => {},
})

export default NxtWatchContext
