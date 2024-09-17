import { useState } from 'react';

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {};

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? `${info} ` : `${info.substring(0, 200)}... `}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {!readMore ? 'read more' : 'show less'}
          </button>
        </p>

        <button
          className="btn btn-block delete-btn"
          type="button"
          onClick={() => deleteTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
