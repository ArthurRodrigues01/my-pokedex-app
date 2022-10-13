import { useState, useEffect } from 'react';
import { getDex, getPokemonData } from '../api/pokeapi';
import { capitalize } from '../functions/functions';
import { useParams, Link} from 'react-router-dom';
import Loading from '../components/LoadingFeedback';

const SinglePokemon = () => {
  const [content, setContent] = useState(null);
  const [pageIndexes, setPageIndexes] = useState([1,2,3,4,5]);
  const { id } = useParams();

  useEffect(() => {
    const rawContent = getDex(Number(id) - 1, 1).then(data => data.results);
    rawContent.then(data => { 
      getPokemonData(data[0].name).then(data1 => {
        setContent(data1);
      });
    });
  }, [id]);

  useEffect(() => {
    if (content !== null) {
      if (content.id < 5) {
        setPageIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      } else if (content.id > 901) {
        setPageIndexes([897, 898, 899, 900, 901, 902, 903, 904, 905]);
      } else {
        setPageIndexes([content.id - 4, content.id - 3, content.id - 2, content.id - 1, content.id, content.id + 1, content.id + 2, content.id + 3, content.id + 4]);
      };
    };
  }, [content]);

  if (content === null) return <Loading/>;

  return (
    <div className='single-pokemon-page-container'>
      <div className='pokemon-card'>
        <div className="pokemon-name">{capitalize(content.name)}</div>
        <img className="sprite" src={content.sprite_link}/>
        <p>{content.description}</p>
        <div className='pokemon-data'>
          <div id='pokemon-data-1'>Peso: {content.weight} kg</div>
          <div id='pokemon-data-2'>Altura: {content.height} m</div>
          <div id='pokemon-data-3'>
            Tipo(s): 
            {
              content.types.map(item => {
                return (
                  <div className={'type-icon-wrapper' + ' ' + item}>
                    <img src={require(`../assets/pokemon-types/${item}.svg`)} className='type-icon'/>
                  </div>
                )
              })
            } 
          </div>
        </div>
      </div>
      <div className="pagination-buttons">
        <Link to={'/pokemon/' + (id > 1 ? Number(id) - 1 : id)}>
          <button className="back-button">{'<<'}</button>
        </Link>
        { 
          pageIndexes.map((item, index) => {
            if (item === content.id) {
              return <button className="current-page-button">{item}</button>
            }

            return (
              <Link to={'/pokemon/' + (item)}>
                <button className="page-button">
                  {item}
                </button>
              </Link>
            )
          })
        }
        <Link to={'/pokemon/' + (id < 905 ? Number(id) + 1 : id)}>
          <button className="next-button">{'>>'}</button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePokemon;