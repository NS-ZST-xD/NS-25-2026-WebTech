import { useState } from "react";

function Technology({ name, category, hours, image }) {

  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);
  const [visible, setVisible] = useState(false);

  function toggleDetails() {
    setVisible(!visible);
  }

  function showTechnology() {
    console.log("Technologia: " + name);
    console.log("Kategoria: " + category);
    console.log("Czas nauki: " + hours + " godz.");
  }

  function showName(technologyName) {
    console.log(technologyName);
  }

  return (
    <article className="card">
      <img
        src={`${import.meta.env.BASE_URL}images/${image}`}
        alt={`Logo technologii ${name}`}
      />
      <h3>{name}</h3>

      <button 
        className="btn btn-toggle" 
        onClick={toggleDetails} 
        aria-expanded={visible}
      >
        {visible ? "Ukryj szczegóły" : "Pokaż szczegóły"}
      </button>

      {visible && (
        <div className="technology-details">
          <span className="technology-badge">{category}</span>
          <p>Czas nauki: {hours} godz.</p>
        </div>
      )}

      <div className="card-section">
        <p>Polubienia: <strong>{likes}</strong></p>
        <div className="button-group">
          <button onClick={() => setLikes(likes + 1)}>Lubię</button>
          <button onClick={() => setLikes(0)}>Resetuj polubienia</button>
        </div>
      </div>

      <div className="card-section">
        <p className={isLearning ? "status-active" : "status-inactive"}>
          {isLearning ? "Uczę się" : "Jeszcze nie uczę się"}
        </p>
        <button onClick={() => setIsLearning(!isLearning)}>
          Zmień status nauki
        </button>
      </div>

      <div className="card-section button-group">
        <button onClick={showTechnology}>Pokaż informacje w konsoli</button>
        <button onClick={() => showName(name)}>Wypisz nazwę</button>
      </div>
    </article>
  );
}

export default Technology;