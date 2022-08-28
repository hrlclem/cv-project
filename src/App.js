import './design/App.css';
import Header from './components/Header.js';
import EditSide from './components/EditSide.js';
import PreviewSide from './components/PreviewSide.js';


function App() {
  return (
    <div className="App">
        <Header />
        <EditSide />
        <PreviewSide />
    </div>
  );
}

export default App;