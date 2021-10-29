import React from 'react';
import Navbar from "./components/navbar";
import BookContextProvider from "./context/BookContext";
import BookList from "./components/BookList";
import NewBookForm from './components/BookForm';


function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar/>
      <BookList />
      <NewBookForm />
    </BookContextProvider>
    </div>
  );
}

export default App;
