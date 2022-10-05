import React from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Nav from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Nav />
      <Body>
        <p>Here if your content</p>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
