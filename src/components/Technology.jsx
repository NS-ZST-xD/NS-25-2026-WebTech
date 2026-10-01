function Technology(props) {
  return (
    <section>
        <h2>Technologia</h2>
        <p>Nazwa: {props.name}</p>
        <p>Kategoria: {props.category}</p>
        <p>Godziny: {props.hours}</p>
    </section>
  )
}

export default Technology
