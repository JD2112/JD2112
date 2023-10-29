import React from 'react';
 
const Accomplishments = () => {
    let url="./web/index.html";
    let element=<a href={url}>Click</a>;

    return (
        <div>
            <h1>Accomplishments</h1>
            {element}
        </div>
        
    );
};
 
export default Accomplishments;