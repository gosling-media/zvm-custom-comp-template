import { Iframe } from './components/Iframe';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '60px', width: '60px' }}>
        <Iframe />
      </div>
    </BrowserRouter>
  );
}

export default App;
