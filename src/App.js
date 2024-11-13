// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('Barbie');
//   const [inputValue, setInputValue] = useState('');
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchMovies(query, 1, true);
//   }, [query]);

//   const fetchMovies = (query, page, reset = false) => {
//     setLoading(true);
//     axios.get('https://www.omdbapi.com/', {
//       params: {
//         s: query,
//         page: page,
//         apikey: '881e985f',
//       }
//     })
//       .then(res => {
//         if (reset) {
//           setMovies(res.data.Search || []);
//         } else {
//           setMovies(prevMovies => [...prevMovies, ...(res.data.Search || [])]);
//         }
//       })
//       .catch(err => console.error('Error fetching data:', err))
//       .finally(() => setLoading(false));
//   };

//   const handleSearch = () => {
//     setQuery(inputValue);
//     setPage(1);
//     fetchMovies(inputValue, 1, true);
//   };

//   const loadMore = useCallback(() => {
//     const nextPage = page + 1;
//     setPage(nextPage);
//     fetchMovies(query, nextPage);
//   }, [page, query]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 100 >=
//         document.documentElement.offsetHeight
//       ) {
//         loadMore();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [loadMore]);

//   return (
//     <div className="container-fluid p-0">
//       {/* NAVBAR */}
//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'pink', position: 'sticky', top: 0, left: 0, right: 0, zIndex: 1000 }}>
//         <div className="container-fluid ms-5 me-5">
//           <h1 className="mb-0" style={{ color: '#DA1884', fontSize: '24px', fontWeight: 'bold' }}>Netflex</h1>
//           <div className="d-flex">
//             <input type="text" className="form-control me-2" placeholder="Search for movies..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//             <button className="btn" style={{ backgroundColor: 'hotpink', color: 'white', borderColor: 'hotpink'}} onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* MOVIE LIST */}
//       <div className="row mx-3 mt-4 d-flex flex-wrap">
//         {movies.map((movie) => (
//           <div key={movie.imdbID} style={{ width: '20%', padding: '10px' }}>
//             <div className="card d-flex flex-column" style={{ height: '100%'}}>
//               <div className="custom-relative custom-overflow-hidden">
//                 <img
//                   src={movie.Poster}
//                   alt={movie.Title}
//                   style={{width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '3/4'}}
//                 />
//               </div>
//               <div className="card-body p-0 d-flex flex-column">
//                 <a
//                   href={`https://www.imdb.com/title/${movie.imdbID}`}
//                   className="btn btn-primary d-flex justify-content-center align-items-center"
//                   target='_blank'
//                   rel='noreferrer'
//                   style={{width: '100%', height: '100%', borderRadius: '0px', fontSize: '16px', backgroundColor: 'hotpink', color: 'white', borderColor: 'hotpink'}}
//                 >
//                   {movie.Title}
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* LOADING SPINNER */}
//       {loading && (
//         <div className="text-center my-4">
//           <div className="spinner-border text-primary" role="status">
//             <span className="visually-hidden"></span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;















// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useReducer, useEffect } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
// import Movie from './components/Movie';
// import Search from './components/Search';

// const initialState = { movies: [], page: 1, loading: false, query: 'Barbie' };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'SET_MOVIES':
//       return { ...state, movies: action.reset ? action.payload : [...state.movies, ...action.payload], loading: false };
//     case 'SET_LOADING':
//       return { ...state, loading: action.payload };
//     case 'SET_QUERY':
//       return { ...state, query: action.payload, page: 1, movies: [] };
//     case 'LOAD_MORE':
//       return { ...state, page: state.page + 1 };
//     default:
//       return state;
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { movies, page, loading, query } = state;

//   useEffect(() => {
//     const fetchMovies = async () => {
//       dispatch({ type: 'SET_LOADING', payload: true });
//       try {
//         const res = await axios.get('https://www.omdbapi.com/', {
//           params: { s: query, apikey: '881e985f', page }
//         });
//         dispatch({ type: 'SET_MOVIES', payload: res.data.Search || [], reset: page === 1 });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchMovies();
//   }, [query, page]);

//   const handleSearch = (newQuery) => {
//     dispatch({ type: 'SET_QUERY', payload: newQuery });
//   };

//   return (
//     <div className="container-fluid p-0">
//       <Header title="Netflex" />
//       <Search onSearch={handleSearch} />
//       <div className="row mx-3 mt-4 d-flex flex-wrap">
//         {movies.map((movie) => (
//           <Movie key={movie.imdbID} movie={movie} />
//         ))}
//       </div>
//       {loading && (
//         <div className="text-center my-4">
//           <div className="spinner-border text-primary" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

















// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useReducer, useEffect } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
// import Movie from './components/Movie';
// import Search from './components/Search';

// const initialState = { movies: [], page: 1, loading: false, query: 'Barbie' };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'SET_MOVIES':
//       return { ...state, movies: action.reset ? action.payload : [...state.movies, ...action.payload], loading: false };
//     case 'SET_LOADING':
//       return { ...state, loading: action.payload };
//     case 'SET_QUERY':
//       return { ...state, query: action.payload, page: 1, movies: [] };
//     case 'LOAD_MORE':
//       return { ...state, page: state.page + 1 };
//     default:
//       return state;
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { movies, page, loading, query } = state;

//   useEffect(() => {
//     const fetchMovies = async () => {
//       dispatch({ type: 'SET_LOADING', payload: true });
//       try {
//         const res = await axios.get('https://www.omdbapi.com/', {
//           params: { s: query, apikey: '881e985f', page }
//         });
//         dispatch({ type: 'SET_MOVIES', payload: res.data.Search || [], reset: page === 1 });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchMovies();
//   }, [query, page]);

//   const handleSearch = (newQuery) => {
//     dispatch({ type: 'SET_QUERY', payload: newQuery });
//   };

//   const loadMoreMovies = () => {
//     dispatch({ type: 'LOAD_MORE' });
//   };

//   return (
//     <div className="container-fluid p-0">
//       <Header title="Netflex" />
//       <Search onSearch={handleSearch} />
//       <div className="row mx-3 mt-3 d-flex flex-wrap">
//         {movies.map((movie) => (
//           <Movie key={movie.imdbID} movie={movie} />
//         ))}
//       </div>
//       <div className="text-center my-4">
//         <button className="btn" style={{ backgroundColor: 'hotpink', color: 'white', borderColor: 'hotpink' }} onClick={loadMoreMovies} disabled={loading}>
//           {loading ? 'Loading...' : 'Load More'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;





import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';

const initialState = { movies: [], page: 1, loading: false, query: 'Barbie' };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.reset ? action.payload : [...state.movies, ...action.payload], loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_QUERY':
      return { ...state, query: action.payload, page: 1, movies: [] };
    case 'LOAD_MORE':
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const { movies, page, loading, query } = state;

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const res = await axios.get('https://www.omdbapi.com/', {
          params: { s: query, apikey: '881e985f', page }
        });
        dispatch({ type: 'SET_MOVIES', payload: res.data.Search || [], reset: page === 1 });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [query, page]);

  const handleSearch = () => {
    dispatch({ type: 'SET_QUERY', payload: inputValue });
  };

  const loadMoreMovies = () => {
    dispatch({ type: 'LOAD_MORE' });
  };

  return (
    <div className="container-fluid p-0">
      <Header
        title="Netflex"
        onSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="row mx-3 mt-4 d-flex flex-wrap">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="text-center my-4">
        <button className="btn" style={{ backgroundColor: 'hotpink', color: 'white', borderColor: 'hotpink' }} onClick={loadMoreMovies} disabled={loading}> 
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default App;