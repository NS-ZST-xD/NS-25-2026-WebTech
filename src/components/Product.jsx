function Product(props) {
  return (
    <section>
      <button onClick={() => props.onSelect(props.name)}>
        Wybierz
      </button>
    </section>
  )
}

export default Product
