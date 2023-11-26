import Navbar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido al mundo Fit"/>
    </div>
  )
}

export default App
