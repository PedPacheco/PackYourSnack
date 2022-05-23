import hamburguer from "../images/Hamburguer.svg"

import "../styles/OrderCheckoutComponent.css"

export function OrderCheckoutComponent() {
  const getOrder = JSON.parse(localStorage.getItem("order")) || [];

  return (
    <div className="order-checkout">
      <img src={hamburguer} alt="Imagem de um lanche" />
      <h2>Obrigado pela sua prefêrencia</h2>

      <div className="resume-order">
        <h2>Resumo do pedido:</h2>
        <ul>
            {getOrder.ingredients.map((item, index) => (
                <li key={index}>{`${item.text} ${item.type}`}</li>
            ))}
        </ul>
        <p>
            Total: {getOrder.totalPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
    </div>
  );
}

export default OrderCheckoutComponent

