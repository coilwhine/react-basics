import "./Content.scss";
import Main from "./Main/Main";
import Navigator from "./Navigator/Navigator";

function Content(): JSX.Element {
  return (
    <div className="Content">
      <Navigator />
      <Main />
    </div>
  );
}

export default Content;
