import React from 'react';
import './App.css';
import { StyledModal } from "./reuseableModal";

function App() {
  const [isPopOpen, setIsPosOpen] = React.useState(false)
  const [isPopOpen2, setIsPosOpen2] = React.useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <span
          style={{
            display: 'flex',
            margin: '5rem',
            cursor: 'pointer'
          }}
          onClick={() => setIsPosOpen(!isPopOpen)}
        >
          Click to pop modal window #1
      </span>
        <StyledModal
          show={isPopOpen}
          handleClose={() => setIsPosOpen(false)}
        >
          <div style={{ color: "black" }}>

            <h1>Pop Window #1 </h1>
              1) reuseable styled component
              2) easy implement
              </div>

        </StyledModal>

        <span
          style={{
            display: 'flex',
            margin: '5rem',
            cursor: 'pointer'
          }}
          onClick={() => setIsPosOpen2(!isPopOpen2)}
        >
          Click to pop modal window #2
      </span>
        <StyledModal
          show={isPopOpen2}
          handleClose={() => setIsPosOpen2(false)}
        >
          <div style={{ color: "black" }}>

            <h1>Pop Window #1 </h1>
              1) could be very stylish
              2) can use throughout of entire application
              </div>

        </StyledModal>


      </header>
    </div>
  );
}

export default App;
