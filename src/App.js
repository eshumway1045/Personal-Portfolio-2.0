import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'



function App() {

  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Resume', description: 'Delicious delicacies' },
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
        {/* {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )} */}
      </main>
    </div>
  );
}

export default App;
