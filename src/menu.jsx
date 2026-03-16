function Menu({canviarTasca}) {
    //ESTATS
    const menuItems = ["Exercici 1", "Exercici 2", "Exercici 3", "Exercici 4", "Galeria", "Carrussel"];
    function onClickMenuItem(item) {
        canviarTasca(item)
    }

  return (
    <div style={{
        position:"fixed",
        top:"35px",
        left:0,
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    }}>
        {menuItems.map((item) => (
            <button key={item} onClick={() => onClickMenuItem(item)}>
                {item}
            </button>
        ))}
    </div>)
}

export default Menu