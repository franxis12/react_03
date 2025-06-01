import { useState } from 'react'
import ContactForm from './components/ContactForm'
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<ContactForm />} />
     </Routes>
    </>
      
  )
}

export default App
