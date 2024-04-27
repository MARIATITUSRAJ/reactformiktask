import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import AddBooks from './components/AddBooks';
import BookDetails from './components/BookDetails';
import EditBooks from './components/EditBooks';
import Footer from './components/Footer';

const App = () => {
   const [id, setId] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addBooks" element={<AddBooks />} />
          <Route path="/bookDetails" element={<BookDetails setId={setId} />} />
          <Route path="/edit/:id" element={<EditBooks id={id} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
};

export default App;