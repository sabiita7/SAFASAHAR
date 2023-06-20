import { useState } from 'react';
import { waste } from '../../data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

   waste = waste[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{waste.name}<br/> </i> 
         {waste.cost}
      </h2>
      <h3>  
        ({index + 1} of {waste.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{waste.type}</p>}
      <img 
        src={waste.url} 
        alt={waste.alt}
      />
    </>
  );
}