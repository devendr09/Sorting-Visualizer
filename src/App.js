import './App.css';
import Sort from './components/Sort'
import Heading from './components/Heading'

function App() {
  return (
    <div className="App">
      <div className='container m-3'>
        <Heading/>
      </div>
      <div className='container m-3'>
        <Sort/>
      </div>
    </div>
  );
}

export default App;
