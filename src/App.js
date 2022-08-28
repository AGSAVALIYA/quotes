import React, { useEffect, useState } from "react";
import {  ProgressBar } from "react-loader-spinner";
import "./App.css";
import Links from "./Quote/Links";
import Quote from "./Quote/Quote";

function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    //fetch with axios headers
    fetch("https://corsproxy.io/?https://nodejs-quoteapp.herokuapp.com/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        </div>
      ) : (
        <Quote quote={quote} />
      )}
      <Links />
    </div>
  );
}

export default App;
