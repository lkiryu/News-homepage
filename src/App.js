import Header from './components/header/header';
import SectionMainNews from './components/sectionMainNews/sectionMainNews';
import SectionOtherNews from './components/sectionOtherNews/sectionOtherNews';

import './App.css';

function App() {
  return (
    <main className='container'>
      <Header />

      <SectionMainNews />

      <SectionOtherNews />

      
    </main>
  );
}

export default App;