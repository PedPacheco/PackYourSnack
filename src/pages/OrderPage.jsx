import HeaderComponent from "../components/HeaderComponent";
import IngredientsComponent from "../components/IngredientsComponent";
import OrderComponent from "../components/OrderComponent";

import "../styles/OrderPage.css";

import { mockApi } from "../MockApi";

import { useEffect, useState } from "react";

function OrderPage() {
  const [step, setStep] = useState("breads");
  const [ingredients, setIngredients] = useState({});
  const [stepProps, setStepProps] = useState(undefined);
  const [order, setOrder] = useState({
    ingredients: [],
    totalPrice: 0,
  });
  const [disableNextStep, setDisableNextStep] = useState(true);

  useEffect(() => {
    mockApi("https://mockapi.com/ingredients").then((data) => {
      setIngredients(data);
      setStepProps(data.data.breads);
    });
  }, []);

  useEffect(() => {
    const stepToProps = {
      breads: ingredients.data?.breads,
      steaks: ingredients.data?.steaks,
      cheeses: ingredients.data?.cheeses,
      salads: ingredients.data?.salads,
      complements: ingredients.data?.complements,
    };

    setStepProps(stepToProps[step]);
  }, [step]);

  function changeStep() {
    const steps = {
      breads: "steaks",
      steaks: "cheeses",
      cheeses: "salads",
      salads: "complements",
    };

    const nextStepMany = ingredients.data[steps[step]].many;

    setStep(steps[step]);
    setDisableNextStep(!nextStepMany);
  }

  function addToOrder(item) {
    const existentItem = order.ingredients.filter((element) => {
      return element.text === item.text;
    });
    const alreadyExists = existentItem.length > 0;
    const removeExistentItem = order.ingredients.filter((element) => {
      return element.text !== item.text;
    });

    const canAddItem = ingredients.data[step].many;

    if (alreadyExists && !canAddItem) {
      console.log("passou");
      setOrder({
        ingredients: [...removeExistentItem, item],
        totalPrice: item.price + order.totalPrice - existentItem[0].price,
      });
      setDisableNextStep(false);

      return;
    }

    setOrder({
      ingredients: [...order.ingredients, item],
      totalPrice: item.price + order.totalPrice,
    });
    setDisableNextStep(false);
  }

  localStorage.setItem("order", JSON.stringify(order));

  return (
    <>
      <HeaderComponent text="Monte Seu Sanduíche" />
      <div className="index">
        <IngredientsComponent
          ingredient={stepProps}
          addToOrder={addToOrder}
          disableNextStep={disableNextStep}
        />
        <OrderComponent
          changeStep={changeStep}
          step={step}
          order={order}
          disableNextStep={disableNextStep}
        />
      </div>
    </>
  );
}

export default OrderPage;
