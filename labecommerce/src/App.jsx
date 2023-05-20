import React, { useEffect, useState } from "react";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import Cart from "./components/Shopping/Cart/Cart";
import GlobalStyles from "./GlobalStyle";
import { AppBox, Content, FadeIn, FadeOut, } from "./AppStyle";
import { productList } from "./assets/productList";
import LoadingPage from "./components/Loading";

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState("");
  const [sortedList, setSortedList] = useState([...productList]);
  const [startList, setStartList] = useState([...productList]);
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
//
useEffect(() => {
  //get useState
  const newCart = localStorage.getItem("cart");
  if(newCart){
  const CartArray = JSON.parse(newCart)
  const newAmount = localStorage.getItem("amount")
  const amountNumber = parseInt(newAmount)
  setAmount(amountNumber)
  setCart([...CartArray])

  setTimeout(() => {
    setLoading(false)
    setShowContent(true)
  }, 3000);
}
},[])


useEffect(() => {
  setTimeout(() => {
    const cartString = JSON.stringify(cart)
    const amountString = JSON.stringify(amount)
    if(amountString === "") {
      setAmount(0)
    }
    localStorage.setItem("amount", amountString)
    localStorage.setItem("cart", cartString)
 }, 10);
 
}, [cart,amount])


  useEffect(() => {
    setSortedList(
      startList.filter((product) => {
        if (minFilter.length === 0 && maxFilter.length === 0) {
          return product;
        } else if (
          (minFilter.length === 0 && product.price <= maxFilter) ||
          (maxFilter.length === 0 && product.price >= minFilter)
        ) {
          return product;
        } else if (product.price <= maxFilter && product.price >= minFilter) {
          return product;
        }
      }).filter((product) => {
         return searchFilter ? product.name.toLowerCase().includes(searchFilter.toLowerCase()) : product
      })
    );

  }, [minFilter, maxFilter, searchFilter]);


  return (
     <>
      <GlobalStyles />
      {loading ? <LoadingPage /> : (
      <Content showContent = {showContent}>
      <AppBox> 
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home
        startList={startList}
        setStartList={setStartList}
        productList={sortedList}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        sortedList={sortedList}
        setSortedList={setSortedList}
      />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
      </AppBox>
      </Content>
      )} 
    </>
  );
}

export default App;
