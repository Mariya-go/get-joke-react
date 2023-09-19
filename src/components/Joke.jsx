import "./Joke.css";
import PropTypes from "prop-types";

const Joke = ({ jokeData }) => {
  const type = jokeData.type === "twopart";

  return (
    <div className="joke">
      <h3>{jokeData.category}</h3>

      {type ? (
        <div>
          <p>{jokeData.setup}</p>
          <p>{jokeData.delivery}</p>
        </div>
      ) : (
        <div>
          <p>{jokeData.joke}</p>
        </div>
      )}
      <ul>
        {Object.entries(jokeData.flags).map(([key, value]) => (
          <li className={value ? "red" : "green"} key={key}>
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};

Joke.propTypes = {};

export default Joke;
