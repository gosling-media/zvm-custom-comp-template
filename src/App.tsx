import { Iframe } from './components/Iframe';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Iframe propData={{ url: 'https://gds.pro' }} propState={{}} event={{}} />
      </div>
    </BrowserRouter>
  );
}

export default App;

