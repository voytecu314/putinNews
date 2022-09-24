import { useState, useEffect, useRef } from 'react';
import HeadLine from './components/HeadLine';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {

const [data, setData] = useState({results: null, loading: true, error: null});

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://newsapi.org/v2/everything?q=Putin&language=en&pageSize=50&sortBy=popularity&page=1&apiKey=${API_KEY}`;
//const URL = `https://newsapi.org/v2/everything?q=putin&from=2022-08-22&sortBy=publishedAt&apiKey=${API_KEY}`;
  
useEffect(()=>{
  setData({results: null, loading: true, error: null})
  fetch(URL)
  .then(res=>res.json())
  .then(json=> setData({results: json, loading: false, error: null}))
  .catch(error=>setData({results: null, loading: true, error}))
},[])

  return (
  <>
    <Header />
    <HeadLine data={data} />
    <Footer />
  </>
    );
}

export default App;

