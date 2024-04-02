import Header from './components/header/header';
import MainNews from './components/mainNews/sectionMainNews';
import OtherNews from './components/otherNews/sectionOtherNews';
import TopNews from './components/topNews/topNews';

import './App.css';

function App() {
  return (
    <main className='container'>
      <Header />

      <section>
        <MainNews />
        
        <OtherNews />
      </section>

      <TopNews />
    </main>
  );
}

export default App;