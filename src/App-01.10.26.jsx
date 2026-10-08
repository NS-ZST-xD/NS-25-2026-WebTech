import './App.css'
import Product from './components/Product';
import Technology2 from './components/Technology2'
import User from './components/User'

function App() {

  function showMessage() {
    console.log("Kliknięto przycisk");
  }

  function selectTechnology(name) {
    console.log("Wybrano: " + name);
  }

  function selectProduct(name) {
    console.log("Wybrano produkt: " + name);
  }


  return (
    <>
      <Product
        name="Laptop"
        cena={3500}
        onSelect={selectProduct} />

      <User
        name="Anna"
        role="Administrator"
      />
    </>




  );
}

export default App
