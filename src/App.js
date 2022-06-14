import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {

  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Projects that I have created or colaborated on.',
    },
    { name: 'Resume', description: 'Link to Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio currentCategory={currentCategory}></Portfolio>

          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
