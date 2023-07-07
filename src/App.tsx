import React from 'react';
import './styles/app.css';
import { Landing } from './components/landing';
import { Introduction } from './components/introduction';
import { Internship } from './components/internship';
import { Showcase} from './components/showcase';
import { Tetris} from './components/tetris';
import { Contact} from './components/contact';
import NavBar from './components/navBar'

function App() {
  return (
    <div className="App">
      <Landing />
      <div className="relative">
        <NavBar />
        <Introduction />
        <Internship />
        <Showcase />
        <Tetris />
        <Contact />
      </div>
    </div>
  );
}

export default App;
