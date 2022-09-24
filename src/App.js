import React from 'react';
import './App.css';
import {capitalize, replaceUselessCharacters} from './functions/functions'
import {getDex, getID, getSprite} from './api/pokeapi';

function App() {
  const [id, setID] = React.useState(1); 
  const [paragraph, setParagraph] = React.useState(''); 
  const [counter, setCounter] = React.useState(0);
  const [content, setContent] = React.useState(null);
  const [pageIndexes, setPageIndexes] = React.useState([1,2,3,4,5]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  React.useEffect(() => {
    const rawContent = getDex(counter, 1).then(data => data.results);
    rawContent.then(data => {
      setContent(data[0])
      setID(getID(data[0].url))
      fetch(data[0].url).then(res => res.json()).then(data => {
        setParagraph(replaceUselessCharacters(data.flavor_text_entries.find(item => item.language.name === 'en').flavor_text, ['\n', '\f']))
      });
    })  
  }, [counter]);

  React.useEffect(() => {
    if (id < 5) {
      setPageIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    } else if (id > 901) {
      setPageIndexes([897, 898, 899, 900, 901, 902, 903, 904, 905]);
    } else {
      setPageIndexes([id - 4, id - 3, id - 2, id - 1, id, id + 1, id + 2, id + 3, id + 4]);
    };
  }, [id])

  if (content === null) return 'Loading...';

  return (
    <div className="App">
      <div>
        <div className="pokemon-name">{capitalize(content.name)}</div>
        <p>
          {paragraph}
        </p>
        <img className="sprite" src={getSprite(content.name)}/>
        <div className="pagination-buttons">
          <button onClick={decrementCounter} className="back-button">{'<<'}</button>
          { 
            pageIndexes.map(item => {
              if (item === id) {
                return <button className="current-page-button">{item}</button>
              }

              return <button className="page-button" onClick={() => {setCounter(item - 1)}}>{item}</button>
            })
          }
          <button onClick={incrementCounter} className="next-button">{'>>'}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
