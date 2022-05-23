import { useState, useEffect } from "react";
import "../styles/CheckoutComponent.css";

export function CheckoutComponent(props) {
  const [checkout, setCheckout] = useState({
    name: {
      value: "",
      valid: false,
    },
    cardNumber: {
      value: "",
      valid: false,
    },
    expirationDate: {
      value: "",
      valid: false,
    },
    cvv: {
      value: "",
      valid: false,
    },
    cpf: {
      value: "",
      valid: false,
    },
  });

  const [checkoutValid, setCheckoutValid] = useState(false);

  useEffect(() => {
    validateCheckoutForm();
  }, [checkout]);

  function validateCheckoutForm() {
    const checkoutData = Object.values(checkout);
    for (let element of checkoutData) {
      if (!element.valid) {
        setCheckoutValid(false);
        return;
      }
    }
    setCheckoutValid(true);
  }

  function validateName(value) {
    const regexName = /^[a-zA-Z]+$/;

    if (!regexName.test(value)) {
      setCheckout({ ...checkout, name: { value: value, valid: false } });
      return;
    }

    setCheckout({ ...checkout, name: { value: value, valid: true } });
  }

  function validateCardNumber(value) {
    const regexCardNumber = /^[0-9]{12}$/;

    if (!regexCardNumber.test(value)) {
      setCheckout({ ...checkout, cardNumber: { value: value, valid: false } });
      return;
    }

    setCheckout({ ...checkout, cardNumber: { value: value, valid: true } });
  }

  function validateExpirationDate(value) {
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const year = String(new Date().getFullYear()).slice(-2);
    const stateYear = value.slice(-2);
    const stateMonth = value.slice(0, -2);

    const regexExpirationDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

    const dateIsFuture =
      (regexExpirationDate.test(value) && stateYear > year) ||
      (regexExpirationDate.test(value) &&
        stateYear === year &&
        stateMonth >= month);

    if (!dateIsFuture) {
      setCheckout({
        ...checkout,
        expirationDate: { value: value, valid: false },
      });
      return;
    }

    setCheckout({ ...checkout, expirationDate: { value: value, valid: true } });
  }

  function validateCvv(value) {
    const regexCvv = /^[0-9]{3}$/;

    if (!regexCvv.test(value)) {
      setCheckout({ ...checkout, cvv: { value: value, valid: false } });
      return;
    }

    setCheckout({ ...checkout, cvv: { value: value, valid: true } });
  }

  function validateCpf(value) {
    const regexCpf = /^[0-9]{11}$/;

    if (!regexCpf.test(value)) {
      setCheckout({ ...checkout, cpf: { value: value, valid: false } });
      return;
    }

    setCheckout({ ...checkout, cpf: { value: value, valid: true } });
  }

  return (
    <div className="checkout">
      <h2>Insira os dados de pagamento:</h2>
      <form className="payment-form">
        <fieldset>
          <div className="form-field">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              placeholder="Seu Nome Completo"
              onKeyUp={(event) => {
                validateName(event.target.value);
              }}
            />
          </div>

          <div className="form-field">
            <label htmlFor="number-Card">Número do Cartão:</label>
            <input
              type="number"
              id="number-Card"
              placeholder="Somente Números"
              onKeyUp={(event) => {
                validateCardNumber(event.target.value);
              }}
            />
          </div>

          <div className="card-info">
            <div className="form-field" id="expiration-date">
              <label htmlFor="expiration-date">Data de Vencimento:</label>
              <input
                type="number"
                id="expiration-date"
                placeholder="MM/AA"
                onKeyUp={(event) => {
                  validateExpirationDate(event.target.value);
                }}
              />
            </div>

            <div className="form-field" id="cvv">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="number"
                id="cvv"
                placeholder="3 dígitos"
                onKeyUp={(event) => {
                  validateCvv(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="number"
              id="cpf"
              placeholder="Somente Números"
              onKeyUp={(event) => {
                validateCpf(event.target.value);
              }}
            />
          </div>
        </fieldset>
      </form>

      <button
        onClick={() => {
          props.openModal(
            checkout.name.value,
            checkout.cvv.value,
            checkout.cardNumber.value
          );
        }}
        disabled={!checkoutValid}
      >
        Pagar
      </button>
    </div>
  );
}
