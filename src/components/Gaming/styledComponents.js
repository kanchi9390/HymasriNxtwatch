import styled from 'styled-components'

export const GamingPage = styled.div`
  padding: 0px;
  width: 100%;
  height: 70vh;
`

export const GamingVideosCotainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  height: 100%;
  overflow-y: auto;
  padding: 40px;
`
export const GamingVideoCard = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0px;
`

export const GamingVideoImg = styled.img`
  width: 16vw;
  height: 42vh;
  margin-right: 5px;
`

export const GamingVideoH1 = styled.h1`
  color: ${props => (props.isThemeLight === true ? '#0f0f0f' : '#ffffff')};
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 7px;
`

export const GamingVideoBio = styled.div`
  display: flex;
  flex-direction: column;
`

export const GamingVideoP = styled.p`
  color: #475569;
  font-size: 13px;
  margin: 2px;
  line-height: 1;
`
