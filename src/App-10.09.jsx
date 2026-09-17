
import './App.css'

function App() {
  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
  };

  const student = {
  name: "Nikola",
  surname: "Soltys",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "Gotowania",
  teacher: "mgr. Barbara Gruszka",
  hours: 40,
  completed: false
};

let statusKursu = ""
if(course.completed == true){
  statusKursu = "Tak"
}
else{
  statusKursu = "Nie"
}



  return (
    <>
      <h2>Zadanie 1</h2>
      <p>{technology.name}</p>
      <p>Kategoria: {technology.category}</p>
      <p>Liczba godzin: {technology.hours}</p>
      
      <br/>
      <br/>

      <h2>Zadanie 2</h2>
      <p>{student.name + " " + student.surname}</p>
      <p>{student.className}</p>
      <p>{student.specialization}</p>

      <br/>
      <br/>

      <h2>Zadanie 3</h2>
      <section className='cookingCourse'>
        <h3>Kurs {course.name}</h3>
        <p>Nauczyciel: {course.teacher}</p>
        <p>Liczba godzin: {course.hours}</p>
        <p>Czy ukończono?: {statusKursu}</p>
      </section>
    </>
  )
}

export default App
