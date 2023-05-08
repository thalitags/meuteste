import './App.css';
import { BsCollectionPlayFill } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { BsFillArchiveFill } from "react-icons/bs";
import Linha from './linha/Linha';
import Card from './card/Card';
import Bnt0 from './bota0/Bnt0';
import Input from './caixatexto1/Input';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Item2 from './pagesnav/Item2';
import Item3 from './pagesnav/Item3';


function App() {

  return (
    <div className="App">
      
      <Outlet />
     
      <Header />
      <h1>Potencialidade no cinema</h1> 
    
      <Item2 />
      <Item3 />

<ul></ul>
      <Header icone={<BsCollectionPlayFill />} titulo="Assistido" />
      <Header icone={<BsCollectionPlay />} titulo="Quero assistir" />
      <Header icone={<BsFillArchiveFill />} titulo="Sem planos de assistir" />

      <Linha />

      <h2>Minha videoteca</h2>

      <div className="centro">
        <Card
          imagem="df1zion"
          titulo="Zion"
          texto="Zion é um curta-metragem de 2018 que segue Zion Clark, nascido sem pernas, crescendo em um orfanato e se tornando um lutador. O documentário foi dirigido por Floyd Russ e lançado na Netflix em 2018" />
        <br />

        <Card
          titulo="Milagre na cela 7"
          texto="Milagre na Cela 7, dirigido por Mehmet Ada Öztekin em 2019 conta a história de um homem com deficiência intelectual que, separado de sua filha, precisa provar sua inocência ao ser preso pela morte da filha de um comandante." />
        <br />
      </div>

      <Linha />
      <div className="centro">
        <Input />
      </div>
      <div className="esquerda">
        <Bnt0 texto="Publicar" />
      </div>
      <Linha />

    </div>
  );
}
export default App;