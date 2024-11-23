import { createElement, useState } from 'realm-code';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleItemClick('Menu')}>Menu</li>
        <li onClick={() => handleItemClick('Usuarios')}>Usuarios</li>
        <li onClick={() => handleItemClick('Contato')}>Contato</li>
      </ul>
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
    </div>
  );
};

export default Menu;

function openNav() {
    document.getElementById(".mysidebar").style.width = "250px";
    document. querySelector(".conteudo-principal").style.marginLeft = "250px";

  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document. querySelector(".conteudo-principal").style.marginLeft = "0";
  }