
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import moviesname from './MovieName.json';
function App() {
  return (
    <div className="App">
     <Header />
    <div className='main'>
      {
        moviesname.map((element) => {
          return(
          <Movies  
            title={element.Title}
            year={element.Year}
            img={element.Poster}
          />
          )
        })
      }

    </div>
    </div>
  );
}

export default App;
