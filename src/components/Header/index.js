import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  LogoutBtn,
  WebsiteLogo,
  HeaderButtonContainer,
  UserProfile,
  Button,
  PopupContainer,
  PopupH1,
  PopupButtons,
  PopupCancelBtn,
  PopupConfirmBtn,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeLight, onChangeTheme} = value
      const websiteLogo = isThemeLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const onClickTheme = () => {
        onChangeTheme()
      }

      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <Navbar isThemeLight={isThemeLight}>
          <Link to="/">
            <WebsiteLogo
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
          </Link>
          <HeaderButtonContainer>
            <Button onClick={onClickTheme} data-testid="theme">
              {isThemeLight ? (
                <FaMoon color="#1e293b" size={27} />
              ) : (
                <FiSun color="#f9f9f9" size={27} />
              )}
            </Button>
            <UserProfile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutBtn isThemeLight={isThemeLight}>Logout</LogoutBtn>
              }
              className="popup-content"
            >
              {close => (
                <>
                  <PopupContainer isThemeLight={isThemeLight}>
                    <PopupH1 isThemeLight={isThemeLight}>
                      Are you sure you want to logout?
                    </PopupH1>
                    <PopupButtons isThemeLight={isThemeLight}>
                      <PopupCancelBtn
                        onClick={() => close()}
                        isThemeLight={isThemeLight}
                      >
                        Cancel
                      </PopupCancelBtn>
                      <PopupConfirmBtn
                        onClick={onLogout}
                        isThemeLight={isThemeLight}
                      >
                        Confirm
                      </PopupConfirmBtn>
                    </PopupButtons>
                  </PopupContainer>
                </>
              )}
            </Popup>
          </HeaderButtonContainer>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
