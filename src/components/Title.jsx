import "./Title.css";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <header className="title">
      <h1>{title}</h1>
    </header>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
