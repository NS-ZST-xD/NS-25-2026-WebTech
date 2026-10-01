function Student(props) {
  return (
    <section>
        <h2>Student</h2>
        <p>Imie: {props.name}</p>
        <p>Klasa: {props.className}</p>
        <p>Wiek: {props.age}</p>
        <p>Specjalizacja: {props.spezialization}</p>
    </section>
  )
}

export default Student
