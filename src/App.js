import './App.css';
import Imagens from './assets/Imagens';
import Componente1 from './components/Componente1';
import Bnt1 from './botao1/Bnt1';
import Componente2 from './components-quadro/Componente2';
import Header from './header/Header';
import {BsCollectionPlayFill} from "react-icons/bs";
import {BsCollectionPlay} from "react-icons/bs";


function App() {
  return (
    <div className="App">

      <Header/>

      <Imagens />
      <Componente1 icone =  {<BsCollectionPlayFill/>} nome = "Assistido" />
      <Componente1 icone =  {<BsCollectionPlay/>} nome = "Vou assistir" />

      <h2>Minha videoteca</h2>

      <Bnt1 nome="Home" />
      <Bnt1 nome="Todos os Filmes" />
      <Bnt1 nome="Favoritos" />

      <p>Categorias de filmes por tipo de deficiência</p>

      <Componente2 nome="Deficiência Física" />  <link rel="Df1zion" href="Df1zion.jpg" />
      <Componente2 nome="Deficiência Auditiva" />
      <Componente2 nome="Deficiência Intelectual" />
      <Componente2 nome="Deficiência Visual" />
      <Componente2 nome="Transtorno do Espectro Autista" />

    </div>
  );
}
export default App;