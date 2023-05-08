// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="app-image-name-con">
      <img src={imageUrl} className="app-icon-size" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
