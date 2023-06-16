
import './App.css';
import MenuDeslizante from '../src/pages/MenuDeslizante'
import ResumoPedidos from './pages/ResumoPedidos';

function App() {
  return (
    <div className='Container'>
      <div className='LateralEsquerda'>
        <MenuDeslizante />
      </div>
      <div className='LateralDireita'>
        <ResumoPedidos />
      </div>

    </div>
  );
}

export default App;
