import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './styles/residentCard.css';

const ResidentCard = ({url}) => {

  const [resident, getResident] = useFetch();


  useEffect(() => {
    getResident(url);
  }, []);

    console.log(resident);
    
  return (
    <article className='resident'>
      <figure className='resident__photo'> 
        <img src={resident?.image} alt="resident image" />
        <figcaption className='resident__status'>
          <div className={`resident__circle ${resident?.status}`}></div>
            <p>{resident?.status}</p>
        </figcaption>
      </figure>
      <h3 className='resident__name'>{resident?.name}</h3>
      <hr />
      <ul className='resident__list'>
        <li className='resident__item'><span>Specie<span></span>{resident?.species}</span></li>
        <li className='resident__item'><span>Origin<span></span>{resident?.origin.name}</span></li>
        <li className='resident__item'><span>Epissodes where appear<span></span>{resident?.episode.length}</span></li>
      </ul>
    </article>
  )
}

export default ResidentCard;