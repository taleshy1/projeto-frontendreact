import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { ItemStyled, Nome } from "./ItensStyle";

export default function Itens({ itemName, itemPrice, itemQuantity, removeItemFromCart, itemId }) {
    return (
        <ItemStyled>
            <Nome>{itemName}</Nome>
            <p> R${Number(itemPrice).toFixed(2)} </p>
            <p>
                Quantidade: {itemQuantity}</p> <button onClick={() => removeItemFromCart(itemId)}>remover</button>
        </ItemStyled>
    )
}