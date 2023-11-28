import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Details'

const Row = ({data, update}) => {
    const {name, id, info, image, price} = data;
  return (
    <>
        <article key={id} className="list">
            <div>
                <img src={image} alt={"Image of, " + name} />
                <h4>{name}</h4>
            </div>
            <br />
            <div style={{display: "flex"}}>
                <Details key={0} placement={"bottom"} name={"See info"} desc={info} title={name} cost={price}/>
                <button onClick={() => update(data.id)}>Not Interested</button>
            </div>
            
        </article>
    </>
  )
}

export default Row