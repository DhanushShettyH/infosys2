import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CartItem from "./Components/CartItem";
import TotalAmount from "./Components/TotalAmount";

function App() {
  const [cart, setcart] = useState([]);
  const [quantity, setquantity] = useState(1);

  const arr1 = [
    {
      id: 1,
      name: "product1",
      description: "product1",
      size: "product1",
      quantity: 1,
      amount: 10,
    },
    {
      id: 2,
      name: "product2",
      description: "product2",
      size: "product2",
      quantity: 1,
      amount: 20,
    },
    {
      id: 3,
      name: "product3",
      description: "product3",
      size: "product3",
      quantity: 1,
      amount: 30,
    },
    {
      id: 4,
      name: "product4",
      description: "product4",
      size: "product4",
      quantity: 1,
      amount: 40,
    },
    {
      id: 5,
      name: "product5",
      description: "product5",
      size: "product5",
      quantity: 1,
      amount: 50,
    },
    {
      id: 6,
      name: "product6",
      description: "product6",
      size: "product6",
      quantity: 1,
      amount: 60,
    },
  ];

  const handleclick = (item) => {
    let exist = cart.filter((i) => i.id === item.id);

    exist.length !== 0
      ? alert("Item already in cart")
      : setcart([...cart, item]);
  };

  const handleremove = (item) => {
    setcart((prevState) => prevState.filter((exist) => exist.id));
  };

  useEffect(() => {}, [cart]);

  return (
    <div className="App">
      <div className=" grid grid-cols-3">
        {arr1.map((item, i) => (
          <div
            key={i}
            className=" rounded-md border-[1px] border-solid border-black mx-10 my-10 space-y-4"
          >
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p> {item.size}</p>
            <button
              onClick={() => handleclick(item)}
              className=" p-2 bg-blue-400 rounded-lg"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      <div className=" flex  flex-row w-full justify-around mx-auto ">
        <div>
          {cart.map((item, i) => (
            <CartItem
              cart={cart}
              key={i}
              item={item}
              setquantity={setquantity}
            />
          ))}
        </div>
        <TotalAmount cart={cart} quantity={quantity} />
      </div>
    </div>
  );
}

export default App;
