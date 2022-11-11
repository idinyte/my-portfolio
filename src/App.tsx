import React from 'react';
import './styles/app.css';
import { Introduction } from './components/introduction';
import { Landing } from './components/landing';
import { Showcase} from './components/showcase';
import { Contact} from './components/contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <div className="relative">
        <Introduction />
        <Showcase />
        <Contact />
      </div>
    </div>
  );
}

export default App;
