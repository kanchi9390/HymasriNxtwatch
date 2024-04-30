import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SiderBarContainer,
  NavLink,
  SBTopCard,
  SBTopRouteCard,
  SBTopRouteText,
  SBBottomCard,
  SBBottomCardH1,
  SBBottomCardImgsContainer,
  SBBottomCardImg,
  SBBottomCardH2,
} from './styledComponents'

const sideBarList = [
  {
    id: 'Home',
    path: '/',
    icon: color => <AiFillHome size={20} color={color} />,
  },
  {
    id: 'Trending',
    path: '/trending',
    icon: color => <HiFire size={20} color={color} />,
  },
  {
    id: 'Gaming',
    path: '/gaming',
    icon: color => <SiYoutubegaming size={20} color={color} />,
  },
  {
    id: 'Saved Videos',
    path: '/saved-videos',
    icon: color => <BiListPlus size={20} color={color} />,
  },
]

class SideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeLight} = value

          const isActiveTab = path => document.location.pathname === path

          const GetSBTopRouteCard = props => {
            const {each} = props
            const {id, path, icon} = each
            const activeTab = isActiveTab(path)
            const color = activeTab ? '#ff0000' : '#606060'
            return (
              <SBTopRouteCard
                activeTab={activeTab}
                isThemeLight={isThemeLight}
                key={id}
              >
                <NavLink to={path}>
                  {icon(color)}
                  <SBTopRouteText isThemeLight={isThemeLight}>
                    {id}
                  </SBTopRouteText>
                </NavLink>
              </SBTopRouteCard>
            )
          }

          return (
            <SiderBarContainer isThemeLight={isThemeLight}>
              <SBTopCard>
                {sideBarList.map(each => (
                  <GetSBTopRouteCard each={each} key={each.id} />
                ))}
              </SBTopCard>
              <SBBottomCard>
                <SBBottomCardH1 isThemeLight={isThemeLight}>
                  CONTACT US
                </SBBottomCardH1>
                <SBBottomCardImgsContainer isThemeLight={isThemeLight}>
                  <SBBottomCardImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    isThemeLight={isThemeLight}
                  />
                  <SBBottomCardImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    isThemeLight={isThemeLight}
                  />
                  <SBBottomCardImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    isThemeLight={isThemeLight}
                  />
                </SBBottomCardImgsContainer>
                <SBBottomCardH2 isThemeLight={isThemeLight}>
                  Enjoy! Now to see your channels and recommendations!
                </SBBottomCardH2>
              </SBBottomCard>
            </SiderBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SideBar
