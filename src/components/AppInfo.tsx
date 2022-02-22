import { useNavigate } from 'react-router-dom'

interface props {
  message: string
  showHomeButton?: Boolean
}

export const AppInfo: React.FC<props> = ({ message, showHomeButton = false }) => {
  const navigate = useNavigate()

  // button onClick -> Go home
  const handleGoHomeButton = () => navigate('/')

  return (
    <div id='main'>
      <div id='app-info'>
        <span>{message}</span>
        {showHomeButton && <button onClick={handleGoHomeButton}>Go home</button>}
      </div>
    </div>
  )
}
