import React from 'react';
import { publication } from './pubcationlist.js';
import '../publication.css';

const Publications = () => {
  const listYear = publication.map(publi =>
    <li key={publi.Id}>
    <p>  
    <h5>{publi.Authors + ' ' }
     ({publi.Year}) 
     { ' ' + publi.Title  + ', '}
     {publi.Journal} 
     {', '+ publi.Number + '. ' }</h5>
     <p><h5><a href={publi.DOI} target="_blank" rel="noopener noreferrer">{publi.DOI}</a></h5></p>
     <p><h6><u>Abstract:</u> {publi.Abstract}</h6></p>
    </p>
    </li>
  );

  
  return (
    <article>
      <div id="nav-b">
      <ul>
        {listYear}
      </ul>
      </div>
    </article>
  );
}

export default Publications;