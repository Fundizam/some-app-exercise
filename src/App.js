import './App.css';
import MainContent from './components/MainContent';
import HeaderContent from './components/HeaderContent';
import FooterContent from './components/FooterContent';

function App() {
  return (
    <div className="App">
      <HeaderContent />
      <MainContent />
      <FooterContent />
    </div>
  );
}

export default App;