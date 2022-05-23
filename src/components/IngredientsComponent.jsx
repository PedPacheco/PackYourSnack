import "../styles/IngredientsComponent.css";

import hamburguer from "../images/Hamburguer.svg";

function IngredientsComponent(props) {
  return (
    <div className="ingredients">
      <img src={hamburguer} alt="Imagem de um Lanche" />

      <h2>{props.ingredient?.step}</h2>

      {props.ingredient?.types.map((ingredient, index) => (
        <button key={index} onClick={() => props.addToOrder(ingredient)}>
          {ingredient.type}
        </button>
      ))}
    </div>
  );
}

export default IngredientsComponent;
