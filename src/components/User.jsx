function Product(props) {

    function selectUser(name,role){
        console.log("Użytkownik: " + name + "\n" + "Rola: " + role);
    }


  return (
    <section>
      <button onClick={() => selectUser(props.name, props.role)}>
        Pokaż użytkownika
      </button>
    </section>
  )
}

export default Product
