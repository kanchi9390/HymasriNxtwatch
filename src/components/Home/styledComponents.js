import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
  min-height: 90vh;
`
export const HomeContent = styled.div`
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#181818'};
  width: 100%;
  overflow-y: auto;
  height: 90vh;
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 35vh;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`

export const BannerLeft = styled.div`
  width: 35%;
`
export const BannerImg = styled.img`
  width: 150px;
  height: 34px;
`
export const BannerText = styled.p`
  color: #1e293b;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.8;
  margin-top: 16px;
`
export const BannerBtn = styled.button`
  background-color: transparent;
  border: 1.5px solid #1e293b;
  color: #1e293b;
  font-weight: 600;
  font-size: 15px;
  height: 45px;
  width: 125px;
  margin-top: 23px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
`

export const VideosContainer = styled.div`
  background-color: ${props =>
    props.isThemeLight === true ? '#f9f9f9' : '#181818'};
  min-height: 100%;
  overflow-y: auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SearchBarContainer = styled.div`
  display: flex;
  padding: 0px;
`

export const SearchInput = styled.input`
  width: 350px;
  height: 20px;
  padding: 16px;
  background-color: ${props =>
    props.isThemeLight === true ? '#ffffff' : '#181818'};
  border: 1px solid
    ${props => (props.isThemeLight === true ? '#cccccc' : '#383838')};
`

export const SearchButton = styled.button`
  width: 70px;
  height: 33.8px;
  border: 1px solid
    ${props => (props.isThemeLight === true ? '#cccccc' : '#383838')};
  background-color: ${props =>
    props.isThemeLight === true ? '#f4f4f4' : '#313131'};
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: space-between;
  list-style-type: none;
  flex-direction: row;
`

export const NoVideosContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`
export const NoVideosImg = styled.img`
  width: 30vw;
`
export const NoVideosH1 = styled.h1`
  color: ${props => (props.isThemeLight ? '#181818' : '#f9f9f9')};
`
export const NoVideosP = styled.p`
  color: #64748b;
`
export const NoVideosBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  height: 37px;
  width: 85px;
  border: none;
  border-radius: 3px;
  margin-top: 25px;
`
