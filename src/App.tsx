import { Iframe } from './components/Iframe';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Iframe url={itemInputs.url} />
      </div>
    </BrowserRouter>
  );
}

export default App;
