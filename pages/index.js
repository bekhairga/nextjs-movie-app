import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
import { getMovies } from "../actions";

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const results = await getMovies();
//       setMovies(results);
//     };
//     fetchData();
//   }, [movies]);
//
//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//         <link
//           rel="stylesheet"
//           href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//           crossOrigin="anonymous"
//         />
//         <script
//           src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//           integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//           crossOrigin="anonymous"
//         ></script>
//         <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//           integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//           crossOrigin="anonymous"
//         ></script>
//         <script
//           src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//           integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//           crossOrigin="anonymous"
//         ></script>
//       </Head>
//
//       <Navbar />
//       <div className="home-page">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3">
//               <SideMenu />
//             </div>
//             <div className="col-lg-9">
//               <Carousel />
//               <div className="row">
//                 <MovieList movies={movies} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <style jsx>
//         {`
//           .home-page {
//             padding-top: 55px;
//           }
//         `}
//       </style>
//     </div>
//   );
// };
// export default Home;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: null,
    };
  }
  //making asynchronous call
  // async componentDidMount() {
  //   const results = await getMovies();
  //   this.setState({ movies: results });
  // }
  componentDidMount() {
    getMovies()
      .then((resolve) => {
        this.setState({ ...this.state, movies: resolve });
      })
      .catch((error) => {
        this.setState({ ...this.state, error: error });
      });
  }
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <Navbar />
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu />
              </div>
              <div className="col-lg-9">
                <Carousel />
                <div className="row">
                  {this.state.error && (
                    <div className="alert alert-danger">{this.state.error}</div>
                  )}
                  <MovieList movies={this.state.movies} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>
          {`
            .home-page {
              padding-top: 55px;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Home;
