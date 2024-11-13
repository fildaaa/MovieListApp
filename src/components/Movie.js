const Movie = ({ movie }) => (
  <div style={{ width: '20%', padding: '10px' }}>
    <div className="card d-flex flex-column" style={{ height: '100%' }}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '3/4' }}
      />
      <div className="card-body p-0 d-flex flex-column">
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          className="btn btn-primary d-flex justify-content-center align-items-center"
          target='_blank'
          rel='noreferrer'
          style={{ width: '100%', height: '100%', borderRadius: 0,fontSize: '16px', backgroundColor: 'hotpink', color: 'white', borderColor: 'hotpink' }}
        >
          {movie.Title}
        </a>
      </div>
    </div>
  </div>
);

export default Movie;