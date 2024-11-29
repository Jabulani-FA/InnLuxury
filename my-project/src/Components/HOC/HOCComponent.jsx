import PropTypes from "prop-types";
const HOCComponent = ({ Component, idName }) => {
  return (
    <div>
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </div>
  );
};

HOCComponent.propTypes = {
  Component: PropTypes.elementType.isRequired,
  idName: PropTypes.string.isRequired,
};

export default HOCComponent;
