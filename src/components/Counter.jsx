import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  function dodaj() {
    setCount(count + 1)
  }

  function odejmij() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  function dodpiec() {
    setCount(count + 5)
  }

  function odjacpiec() {
    setCount(count - 5)
  }

  function ustawsto() {
    setCount(100)
  }

  function ustawfalsetrue(){
    if(active == true){
        setActive(false);
    }
    else{
        setActive(true);
    }
  }


  return (
    <>
      <p>Licznik: {count}</p>
      <p>Stan: {active ? 'Aktywny' : 'Nieaktywny'}</p>

      <button onClick={dodaj}>
        Zwiększ
      </button>

      <button onClick={odejmij}>
        Zmniejsz
      </button>

      <button onClick={reset}>
        Reset
      </button>

      <button onClick={dodpiec}>
        +5
      </button>

      <button onClick={odjacpiec}>
        -5
      </button>
      <button onClick={ustawsto}>
        Ustaw na 100
      </button>
      <button onClick={ustawfalsetrue}>
        Zmień stan
      </button>
    </>
  );
}

export default Counter;