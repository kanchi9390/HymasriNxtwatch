import styled from 'styled-components'

export const HomeFailureView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`
export const HomeFailureImg = styled.img`
  width: 25vw;
`
export const HomeFailureH1 = styled.h1`
  color: ${props => (props.isThemeLight ? '#181818' : '#f9f9f9')};
`
export const HomeFailureP = styled.p`
  color: #64748b;
`
export const HomeFailureBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  height: 37px;
  width: 85px;
  border: none;
  border-radius: 3px;
`
