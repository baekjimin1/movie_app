import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies:[],
  };

  getMovies = async () => {//비동기식이라 밑에를 가져오기전까지 실행하면 안되서 기다려줘야함 await 동기식 : 동시에 여러가지 작업 실행
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    //console.log(movies);
    this.setState({isLoading:false, movies});//키:키값 이름이 동일하면 movies: movies
  }

  componentDidMount() {
    /*setTimeout(() => {
      this.setState({isLoading:false});
    },6000)//6초지나면 1번만실행.setstate 값을 false로 바꿔라*/
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;//구조분해할당
    return (
      <section className="container">
      {isLoading ? 
        (<div className="loader">
          <span className="loader_text">'Loading...'</span>
        </div>) :
        (<div className="movies">
            {movies.map((movie,index) => (<Movie
                              key = {index}
                              id = {movie.id}
                              year = {movie.year}
                              title = {movie.title}
                              summary = {movie.summary}
                              poster = {movie.medium_cover_image}
                              genres = {movie.genres}
                              />))}
        </div>)
      }
      </section>
    )
  }
}

export default Home;
