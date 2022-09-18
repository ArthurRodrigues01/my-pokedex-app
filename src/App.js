import React from 'react';
import './App.css';
import {getDex, getID, getSprite} from './api/pokeapi';

function App() {
  const [counter, setCounter] = React.useState(0);
  const [content, setContent] = React.useState(null);
  
  const incrementCounter = () => {
    setCounter(counter + 5);
  };
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 5);
    }
  };
  
  React.useEffect(() => {
    const rawContent = getDex(counter, 5).then(data => data.results);
    rawContent.then(data => {setContent(data)});
  }, [counter])

  if (content === null) return 'Loading...';

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={incrementCounter}>Próx.</button>
          <button onClick={decrementCounter}>Ante.</button>
        </div>
        {content.map(item => {
          return (
            <>
              <div>{getID(item.url)} - {item.name}</div>
              <img className='sprite' src={getSprite(item.name)}/>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
