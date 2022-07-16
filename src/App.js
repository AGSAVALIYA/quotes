import React, {useEffect, useState} from 'react';
import './App.css';
import Links from './Quote/Links';
import Quote from './Quote/Quote';

function App() {
  const [quote, setQuote] = useState('');
  
  const fetchQuote = () => {
   //fetch with axios headers
    fetch('https://cors-anywhere.herokuapp.com/https://nodejs-quoteapp.herokuapp.com/quote')
    .then(res => res.json())
    .then(data => {
      setQuote(data.quote);
    }
    )
    .catch(err => console.log(err));
  }
  useEffect(() => {
    fetchQuote();
  }
  , []);




  return (
    <div className="App">
        
        <Quote quote={quote} />
      <Links/>
    </div>
  );
}

export default App;
