function Technology2(props) {
  return (
    <section>
      <h2>{props.name}</h2>
      <p>{props.category}</p>
      <p>{props.hours}</p>

      <button onClick={() => props.onSelect(props.name)}>
        Wybierz
      </button>

      <p>Polubienia: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>
          Lubię
        </button>

    </section>
  );
}
export default Technology2