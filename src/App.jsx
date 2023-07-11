import { useState } from 'react'

import './styles/components/app.sass'

function App() {
  const [popUpClass, setPopUpClass] = useState('pop-up')
  const [shareClickedClass, setShareClickedClass] = useState('')
  const handlePopUp = () => {
    if (popUpClass === 'pop-up' && shareClickedClass === '') {
      setPopUpClass('pop-up-show')
      setShareClickedClass('share-clicked')
    } else {
      setPopUpClass('pop-up')
      setShareClickedClass('')
    }
  }

  return (
    <div className="container">
      <div className="image">
        <img src="./src/assets/drawers.jpg" alt="drawers" />

      </div>
      <div className="text">
        <h1>Shift the overall look and feel by adding these wonderful
          touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.</p>
        <div className="footer">
          <div className="author">
            <img src="./src/assets/avatar-michelle.jpg" alt="michelle" />
            <div className="author-data">
              <h2>Michelle Appleton</h2>
              <p>28 Jun 2020</p>
            </div>
          </div>
          <button className={`share  ${shareClickedClass}`} onClick={handlePopUp}>
            <img src="./src/assets/icon-share.svg" alt="share-icon" />
          </button>
        </div>
        <div className={`${popUpClass}`}>
          <h3>Share</h3>
          <img src="./src/assets/icon-facebook.svg" alt="facebook-icon" />
          <img src="./src/assets/icon-twitter.svg" alt="twitter-icon" />
          <img src="./src/assets/icon-pinterest.svg" alt="pinterest-icon" />
        </div>
      </div>
    </div>
  )
}

export default App
