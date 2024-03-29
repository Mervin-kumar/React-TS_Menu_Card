import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

export type pizzaData= {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}[]
function App() {
  const pizzaData :pizzaData= [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 60,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 100,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 120,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 120,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 150,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 180,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
  return (
    <div>
    <Header />
    <Main pizzas={pizzaData}/>
    <Footer />
    </div>
  )
}

export default App
