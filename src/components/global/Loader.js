function Loader(props) {
  const {fullpage = false} = props;
  return (
    <div id={`loader-${fullpage}`} className="column-24">
      <img src="/static/images/loader.svg"
        alt="loading..."
        className="uk-align-center"/>
    </div>
  );
}

export default Loader;
