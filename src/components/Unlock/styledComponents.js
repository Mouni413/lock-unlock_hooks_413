// Style your elements here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  background-size: cover;
  min-height: 100vh;
`

export const LockImage = styled.img`
  width: 150px;
`

export const LockText = styled.p`
  color: #e2e8f0;
  font-size: 20px;
  font-family: 'Roboto';
`

export const LockButton = styled.button`
    color:white;
    font-size:15px;
    font-family:"Roboto"
    border-width:0px;
    border-radius:10px;
    background-color:#06b6d4;
    padding:10px;
    outline:none;
    margin-top:40px;
`
