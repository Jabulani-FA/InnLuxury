const HOCComponent = ({ Component, idName }) =>
  function HOC() {
    return (
      <div>
        <span className="hash-span" id={`#${idName}`}>
          &nbsp;
        </span>
        <Component />
      </div>
    );
  };

export default HOCComponent;
