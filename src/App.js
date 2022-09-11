import React from 'react';
import './App.css';
import {getDex} from './api/pokeapi';

function App() {
  const rawContent = getDex(0,151).then(data => data.results);
  const [content, setContent] = React.useState(null);


  React.useEffect(() => {
    rawContent.then(data => data.map((item, index) => {
      return `${index + 1} - ${item.name}`;
    })).then(data => {
      setContent(data);
    })
  }, [])

  if (content === null) return 'Nothing to be exhibit yet';

  return (
    <div className="App">
      <div>
        {content.map(item => {
          return <div>{item}</div>
        })}
      </div>
    </div>
  );
}

export default App;
