import { useState } from "react";
import { CheckoutComponent } from "../components/CheckoutComponent";
import HeaderComponent from "../components/HeaderComponent";
import ModalComponent from "../components/ModalComponent";
import { OrderCheckoutComponent } from "../components/OrderCheckoutComponent";

import "../styles/CheckoutPage.css";

function CheckoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [cvv, setCvv] = useState("");
  const [numberCard, setNumberCard] = useState("");

  function OpenModal(name, cvv, numberCard) {
    setIsModalOpen(true);
    setClientName(name);
    setCvv(cvv);
    setNumberCard(numberCard);
  }

  function CloseModal() {
    setIsModalOpen(false);
  }
  console.log(isModalOpen);
  return (
    <>
      {isModalOpen && numberCard === "111111111111" && (
        <ModalComponent>
          <h1>Pagamento Recusado</h1>
          <p>
            Identificamos que você tentou inserir um número de cartão inválido
            para tentar nos enganar. Calote aqui não!
          </p>
          <button onClick={CloseModal}>Me Desculpe</button>
        </ModalComponent>
      )}{" "}
      {isModalOpen && numberCard !== "111111111111" && (
        <ModalComponent>
          <h1>Pagamento Aprovado com Sucesso</h1>
          <p>
            Muito obrigado pela compra, {clientName}, ela foi computada no
            cartão de final {cvv}. Esperamos que tenha um excelente lanche e que
            possamos vos atender mais vezes!
          </p>
          <button onClick={CloseModal}>Ok</button>
        </ModalComponent>
      )}
      <HeaderComponent text="Pague seu sanduíche" />
      <div className="index">
        <OrderCheckoutComponent />
        <CheckoutComponent openModal={OpenModal} />
      </div>
    </>
  );
}

export default CheckoutPage;
