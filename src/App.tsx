import React from 'react';
import Body from './Components/Body';
import Exporter from './Components/Exporter';
import Footer from './Components/Footer';
import Nav from './Components/Navigation';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <Nav />
      <Body>
        <Exporter />
        <Table />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
