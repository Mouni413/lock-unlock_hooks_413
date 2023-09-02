// Write your code here
import {useState} from 'react'
import {
  BackgroundContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)
  const lockImage = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const lockImageAlt = isLocked ? 'lock' : 'unlock'
  const lockText = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const buttonText = isLocked ? 'Unlock' : 'Lock'
  const onChangeLock = () => {
    setIsLocked(prevState => !prevState)
  }
  return (
    <BackgroundContainer>
      <LockImage src={lockImage} alt={lockImageAlt} />
      <LockText>{lockText}</LockText>
      <LockButton type="button" onClick={onChangeLock}>
        {buttonText}
      </LockButton>
    </BackgroundContainer>
  )
}

export default Unlock
