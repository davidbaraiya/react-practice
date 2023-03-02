import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const api = "https://official-joke-api.appspot.com/jokes/programming/random";

const Joke = () => {
  const [joke, setJoke] = useState([]);

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      console.log(data);
      setJoke(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className="container py-5">
      {joke.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.setup} </p>
            <p>{item.punchline} </p>
          </div>
        );
      })}

      <button className="btn btn-primary" onClick={() => getData(api)}>
        next
      </button>
    </div>
  );
};

export default Joke;
