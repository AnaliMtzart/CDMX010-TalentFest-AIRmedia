import React, { Fragment, useState } from "react";
import FormNav from "../../Components/FormNav/FormNav";
import { FormBtns, FormRequestBtn, FormPickUpBtn } from "./FormElements";
import DeliveryForm from "../../Components/OrderForms/DeliveryForm/DeliveryForm.js";
import PickUpForm from "../../Components/OrderForms/PickUpForm/PickUpForm.js";

function Form({cart, setCart, total, setTotal}) {
  console.log('carrito form', cart, setCart)
  const [deliveryForm, setDeliveryForm] = useState(true);

  const handleSetDelivery = () => setDeliveryForm(true);
  const handleSetPickUp = () => setDeliveryForm(false);

  return (
    <Fragment>
      <FormNav />
      <FormBtns>
        <FormRequestBtn onClick={handleSetDelivery}>
          Solicitar envío
        </FormRequestBtn>
        <FormPickUpBtn onClick={handleSetPickUp}>Recoger pedido</FormPickUpBtn>
      </FormBtns>
      {deliveryForm ? <DeliveryForm cart={cart} setCart={setCart} total={total} setTotal={setTotal}/> : <PickUpForm cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>}
    </Fragment>
  );
}
export default Form;
