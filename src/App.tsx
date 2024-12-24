import { Iframe } from './components/Iframe';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const propData = { url: 'https://example.com' }; // Replace with actual data
  const propState = {}; // Replace with actual state
  const event = {}; // Replace with actual event

  return (
    <BrowserRouter>
      <div>
        <Iframe propData={propData} propState={propState} event={event} />
      </div>
    </BrowserRouter>
  );
}

export default App;
