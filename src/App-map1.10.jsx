import './App.css'
import Technology from './components/Technology';
import Student from './components/Student';

function App() {

  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }
  ];

  const students = [
    { id: 1, name: "Anna", className: "4P", age: 18, spezialization: "Tworzenie gier" },
    { id: 2, name: "Jan", className: "4P", age: 17, spezialization: "Zarządzanie bazami danych" },
    { id: 3, name: "Adam", className: "5P", age: 19, spezialization: "Tworzenie stron internetowych" },
    { id: 4, name: "Adam", className: "3P", age: 16, spezialization: "Tworzenie apllikacji " }
  ];

  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  return (
    <>
      {
        technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours} />
        ))
      }

      {
        students.map((student) => {
          return (
            <Student
              key={student.id}
              name={student.name}
              className={student.className}
              age={student.age}
              spezialization={student.spezialization}
            />
          );
        })


      }
    </>
  )
}

export default App
