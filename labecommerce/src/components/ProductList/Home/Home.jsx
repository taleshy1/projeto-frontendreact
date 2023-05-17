import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeBoxStyled, HomeCardsBox, HomeLabelBox } from "./HomeStyle";

export default function Home({
  productList,
  amount,
  setAmount,
  cart,
  setCart,
  sortedList,
  setSortedList,
  startList,
  setStartList
}) {
  const [ordination, setOrdination] = useState("null");
  let productQuantity = 0;

  const addItensOnCart = (receivedProduct) => {
    const newProduct = cart.find((item) => item.id === receivedProduct.id)
    if (newProduct === undefined) {
      receivedProduct = {...receivedProduct, quantity: 1}
      setCart([...cart, receivedProduct]);
      setAmount(Number(amount) + Number(receivedProduct.price))
    } else {
      const newCart = cart.map((item) => {
        if(item.id === receivedProduct.id){
          setAmount(Number(amount) + Number(receivedProduct.price))
          return {...newProduct, quantity: newProduct.quantity+1}
        }else {
          return item
        }
      })
      setCart(newCart)
    }
  };

  const renderProducts = productList.map((product) => {
    productQuantity++;

    return <ProductCard product={product} addItensOnCart={addItensOnCart} key={product.id}/>;
  });

  useEffect(() => {
    sortedList.sort((a,b) => {
      if(ordination === "Decrescente"){

        if(a.name < b.name){
          return -1;
        }
        if(a.name > b.name){
          return 1
        }
        return 0
      }else if(ordination === "Crescente"){
        if(a.name > b.name){
          return -1;
        }
        if(a.name < b.name){
          return 1
        }
        return 0
      }
      return 0
    }
    )
    startList.sort((a,b) => {
      if(ordination === "Decrescente"){

        if(a.name < b.name){
          return -1;
        }
        if(a.name > b.name){
          return 1
        }
        return 0
      }else if(ordination === "Crescente"){
        if(a.name > b.name){
          return -1;
        }
        if(a.name < b.name){
          return 1
        }
        return 0
      }
      return 0
    }
    )
    
    setStartList(startList)
    setSortedList([...sortedList])
  }, [ordination])

  return (
    <HomeBoxStyled>
      <HomeLabelBox>
        <span>Quantidade de produtos: {productQuantity}</span>
        <label>
          Ordenação:
          <select
            value={ordination}
            onChange={(e)=>setOrdination(e.target.value)}
          >
            <option value="">Ordenar</option>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </label>
      </HomeLabelBox>
      <HomeCardsBox>{renderProducts}</HomeCardsBox>
    </HomeBoxStyled>
  )
}


// .sort((a,b) => {
  //     if(ordination === "Decrescente"){

  //       if(a.name < b.name){
  //         return -1;
  //       }
  //       if(a.name > b.name){
  //         return 1
  //       }
  //       return 0
  //     }else if(ordination === "Crescente"){
  //       if(a.name > b.name){
  //         return -1;
  //       }
  //       if(a.name < b.name){
  //         return 1
  //       }
  //       return 0
  //     }
  //     return 0
  //   }
  //   )

  // cart.map((product) => {
  //   if (product.includes(receivedProduct.id)) { return true; }
  // }