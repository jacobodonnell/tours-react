import Tour from './Tour';

const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <h1 className="title">Our Tours</h1>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
