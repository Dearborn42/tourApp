import React, { useState } from 'react';
import Row from "./Row";
import Table from 'react-bootstrap/Table';

const Tables = ({places}) => {
    const [loactions, setLocations] = useState(places)
    function updateLocations(id) {
        setLocations(loactions.filter(x => x.id !== id));
    }
  return (
    <div>
      {/* <Table striped>
      <thead>
        <tr>
          <th colSpan={4}>Tours</th>
        </tr>
      </thead>
      <tbody> */}
        {loactions.map((place) => 
            (<Row data={place} update={updateLocations} />)
        )}
      {/* </tbody>
    </Table> */}
    </div>
  );
};

export default Tables;