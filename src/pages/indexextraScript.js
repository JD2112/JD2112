import { people } from './data.js';
import { getImageUrl } from './utils.js';
 
const Home = () => {
    const listItems = people.map(person =>
        <li key={person.id}>
          <img 
            src={getImageUrl(person)}
            alt={person.name}
            className="img-frame"
          />
          <p>
            <h1><b>{person.name}</b></h1>
            <p>
            <h3>{' ' + person.profession + ' '}</h3></p>
            <h5>{person.accomplishment}</h5>
            
          </p>
        </li>
      );
      return (
        <article>
          <ul>{listItems}
          </ul>
        </article>
        
      );
    }
 
export default Home;