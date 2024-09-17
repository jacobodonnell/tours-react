import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('no response');
      const toursData = await response.json();
      setTours(toursData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const deleteTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  const refetch = () => {
    setIsLoading(true);
    fetchTours();
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length <= 0) {
    return (
      <main>
        <section>
          <h1 className="title">No Tours Left</h1>
          <div className="title-underline"></div>
          <button
            type="button"
            className="btn btn-block"
            onClick={refetch}
            style={{
              marginTop: '2rem',
            }}
          >
            Reload All Tours
          </button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};
export default App;
