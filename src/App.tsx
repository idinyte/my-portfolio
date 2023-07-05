import React from 'react';
import './styles/app.css';
import { Landing } from './components/landing';
import { Introduction } from './components/introduction';
import { Internship } from './components/internship';
import { Showcase} from './components/showcase';
import { Contact} from './components/contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <div className="relative">
        <Introduction />
        <Internship />
        <Showcase />
        <Contact />
      </div>
    </div>
  );
}

export default App;
