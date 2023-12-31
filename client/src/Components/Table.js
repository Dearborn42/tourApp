import React, { useState } from 'react';
import Row from "./Row";

const Tables = ({places}) => {
    const [loactions, setLocations] = useState(places)
    function updateLocations(id) {
        setLocations(loactions.filter(x => x.id !== id));
    }
  return (
    <div className='list d-flex flex-column'>
        {loactions.map((place) => (
          <>
            <Row key={place.id} data={place} update={updateLocations} /> <br/>
          </>
        ))}
    </div>
  );
};

export default Tables;