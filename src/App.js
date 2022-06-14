import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {

  const [categories] = useState([
    {
      name: 'About',
      description: 'Learn about me',
    },
    { name: 'Portfolio', description: 'Everything I have been working on' },
    { name: 'Resume', description: 'Download my official resume'},
    { name: 'Contact', description: 'Send me a message'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [isSelected, setisSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        isSelected={isSelected}
        setisSelected={setisSelected}
      ></Nav>
      <main>
        {
          (currentCategory.name === 'About') ?
          <About></About>
          : (currentCategory.name === 'Contact') ?
          <ContactForm></ContactForm>
          : (currentCategory.name === 'Portfolio') ?
          <Portfolio></Portfolio>
          : (currentCategory.name === 'Resume') ?
          <Resume></Resume>
          :
          <About></About>
        }
      </main>
    </div>
  );
}

export default App;
