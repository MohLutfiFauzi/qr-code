import './App.css';
import imageQrCode from './image/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div className='qr-code-card'>
        <img src={imageQrCode} alt='qr code' />
        <div className='qr-description'>
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
