import "../styles/OrderComponent.css";
import { useNavigate } from "react-router-dom";

function OrderComponent(props) {
  const navigate = useNavigate();

  function handleCheckoutPage() {
    navigate("/checkout");
  }
  return (
    <div className="order">
      <div className="order-ingredients">
        <h2>Ingredientes selecionados</h2>
        <ul>
          {props.order?.ingredients.map((item, index) => (
            <li key={index}>{`${item.text} ${item.type}`}</li>
          ))}
        </ul>
      </div>

      <div className="payment">
        <h1 className="price">
          Total:{" "}
          {props.order?.totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
        {props.step === "complements" ? (
          <button className="button" onClick={handleCheckoutPage}>
            Prosseguir
          </button>
        ) : (
          <button
            className="button"
            onClick={props.changeStep}
            disabled={props.disableNextStep}
          >
            Prosseguir
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderComponent;
