import "./AddItem.css";
function AddItem(props) {
  return (
    <section className="organizacion">
      <h3>Mi Organizacion</h3>
      <img
        className="addItem"
        src="/img/add.png"
        alt="add"
        onClick={props.mostrar}
      />
    </section>
  );
}

export default AddItem;
