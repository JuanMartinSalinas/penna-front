import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import DataRendering from './components/DataRendering/DataRendering';
import AllForms from './components/Forms/AllForms/AllForms';

function App() {
  return (
    <div className="App">
        <article className="App-header">
            <Carrousel/>
            <div className="lol">
                <AllForms/>
                <DataRendering/>
            </div>
        </article>
    </div>
  );
}

export default App;
