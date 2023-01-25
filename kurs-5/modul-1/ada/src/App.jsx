import './App.css';
import About from './components/About';
import Image from './components/Image';

function App() {
  const name = 'Ada Lovelace';

  return (
    <main>
      <header>
        <h1>{name}</h1>
      </header>

      <section className='images'>
        <Image />
      </section>

      <About />

      <footer className="wikipedia">
        <span>
          Läs mer om Ada Lovelace{" "}
          <a href="https://sv.wikipedia.org/wiki/Ada_Lovelace">
           här
          </a>
        </span>
      </footer>
    </main>
  );
}

export default App;
