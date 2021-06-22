import './App.css';
import React from 'react';
import Order from './components/Order';
// import Image from './components/image.js';
// import cuteCat from './components/cute-cat-staring.jpg'

// function App() {
//   return (
//     <div>
//       <Image source = {cuteCat} alternativeText = 'Cute cat staring' />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
         <Order order = {headphone} />
         <Order order = {energyDrink} />
      </div>
    );
  }
}


export default App;
