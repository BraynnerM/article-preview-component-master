import './styles/components/app.sass'
function App() {


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
            <img src="" alt="" />
            <div className="author-data">
              <h2>Michelle Appleton</h2>
              <p>28 Jun 2020</p>
            </div>
            <button className="share">
              <div>
                <h3>Share</h3>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
