import './App.css';
import Imagens from './assets/Imagens';
import Componente1 from './components/Componente1';
import Bnt1 from './botao1/Bnt1';
import Componente2 from './components-quadro/Componente2';


function App() {
  return (
    <div className="App">
      <h2>Minha videoteca</h2>
      <Imagens />
      <Componente1 />
      <Bnt1 />
      <Componente2 />
    </div>
  );
}
export default App;