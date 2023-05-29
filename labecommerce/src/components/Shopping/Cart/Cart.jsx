import React from "react";
import Itens from "../Items/Itens";
import { Button, CarrinhoTitle, CartBoxStyled, Total } from "./CartStyle";


export default function Cart({ amount, setAmount, cart, setCart }) {

  const removeItemFromCart = (id) => {
    cart.map((myProduct) => {
      if (myProduct.id === id && myProduct.quantity >= 1) {
        myProduct.quantity = Number(myProduct.quantity) - 1;
        setCart([...cart]);
        setAmount(Number(amount) - Number(myProduct.price));
      }

      if (myProduct.quantity === 0) {
        const newCart = cart.filter(object => object.quantity !== 0)
        setCart(newCart)
      }
    })

  }

  const renderItensOnCart = cart.map((item) => {
    return (
      <Itens
        itemName={item.name}
        itemPrice={item.price}
        itemQuantity={item.quantity}
        itemId={item.id}
        removeItemFromCart={removeItemFromCart}
        key={item.id}
      />
    );
  });


  return (
    <CartBoxStyled>
      <CarrinhoTitle>Carrinho</CarrinhoTitle>
      {renderItensOnCart}
      <Total>Valor total: R${Number(amount).toFixed(2)}</Total>
      <Button onClick={() => alert("Infelizmente sou programador e não piloto, a viagem fica pra depois!")}>Finalizar</Button>
    </CartBoxStyled>
  );
}
