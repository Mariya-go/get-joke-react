import { useState } from "react";
import { useEffect } from "react";

import PropTypes from "prop-types";

import axios from "axios";

import "./JokeContainer.css";
import Loader from "./Loader";
import Joke from "./Joke";

const JokeContainer = () => {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState("");
  const [joke, setJoke] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getJoke = async () => {
      try {
        const res = await axios.get("https://v2.jokeapi.dev/joke/Any");
        if (res.status === 200) {
          setJoke(res.data);
        } else {
          throw new Error(`Failed to axios with status: ${res.status}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoad(false);
      }
    };

    getJoke();
  }, [count]);

  const buttonHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="joke-container">
      {load && <Loader />}
      {error && <p className="error">{error}</p>}
      {joke && <Joke jokeData={joke} />}

      <div className="button-container">
        <button className="button" onClick={buttonHandler}>
          New joke
        </button>
      </div>
    </div>
  );
};

JokeContainer.propTypes = {};

export default JokeContainer;
