function Book(props) {
  return (
    <section>
        <h2>Książka</h2>
        <p>Tytuł: {props.title}</p>
        <p>Autor: {props.author}</p>
    </section>
  )
}

export default Book
