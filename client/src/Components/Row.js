import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Details'

const Row = ({data, update}) => {
  return (
    <>
        <tr key={data.id} className="border border-black">
              <td colSpan={2}>{data.name}</td>
              <td colSpan={1}><Details key={0} placement={"bottom"} name={"See info"} desc={data.info} title={data.name}/></td>
              <td colSpan={1}><button onClick={() => update(data.id)}>Not Interested</button></td>
        </tr>
    </>
  )
}

export default Row