import "../styles/HeaderComponent.css";

function HeaderComponent(props) {
  const { text } = props;
  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  );
}

export default HeaderComponent;
