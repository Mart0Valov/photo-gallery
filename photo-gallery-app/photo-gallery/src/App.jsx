// import { useState } from 'react'
// import './App.css'
import { Route, Routes } from "react-router-dom";
import HomeView from './views/Home.jsx';
import CreateEditPhoto from "./views/CreateEditPhoto.jsx";
import SinglePhoto from "./views/SinglePhoto.jsx";
import { useState, useEffect } from "react";
function App() {

  const [page, setPage] = useState('home')
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/photos").then(response => response.json()).then(data => setAllPhotos([...data]));
  }, []);

  if (page === 'home') {
    return <HomeView photos={allPhotos} />
  } else if (page === 'upload') {
    return <CreateEditPhoto />
  } else if (page === 'edit') {
    return <SinglePhoto />
  }
  ;
}

export default App
