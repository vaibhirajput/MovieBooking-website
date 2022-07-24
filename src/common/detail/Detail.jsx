import React from 'react'
import Header from '../header/Header'
import "../detail/Detail.css"
import Data from '../../common/moviedata/moviesData';
import Artists from "../artistsData/Artists"
import { Link, useParams } from 'react-router-dom';

function Detail() {
  let { id } = useParams();





  return (
    <>
      <Header />

      <div id='detail-mainediv'>
        <div className="movieposter">
          <div >
            <Link to="/" > <button className="backbtn"> 	&lt; Back to Home</button> </Link>
          </div>
          {
            Data.map((data, index) => {
              if (id === data.id) {
                return (
                  <div className="mposter" key={data.critics_rating}>
                    <img src={data.poster_url} alt="" className="poster" />
                  </div>
                )

              }

            })
          }


        </div>


        <div className="movietrailer">
          {
            Data.map((data, index) => {
              if (id === data.id) {
                return (
                  <>
                    <div className="moviediscription" key={index}>
                      <h1>{data.title}</h1>
                      <p>  <b> Genres </b>:&nbsp;{data.genres[1]}</p>
                      <p>  <b> Duration </b>:&nbsp;{data.duration}</p>
                      <p>  <b> Release Date </b>:&nbsp;{data.release_date}</p>
                      <p>  <b> Rating </b>:&nbsp;{data.critics_rating}</p>
                      <br />
                      <br />
                      <p>  <b> Plot </b>:&nbsp;{data.storyline}</p>
                      <p>  <b> Trailer </b>:&nbsp;</p>

                    </div>

                    <br />

                    <div className="trailer" key={data.duration} >
                      <embed width="100%" height="100%" src={data.trailer_url} type="video/mp4" />
                    </div>
                  </>
                )

              }

            })
          }

        </div>

        <div className="artistsphoto">
          {
            Data.map((data, index) => {
              if (data.artists.length <= 1 && id === data.id) {
                return (
                  <>
                    <div className="rating" key={data.id}>
                      <div >
                        <p>Rate this movie</p>
                        <p>{data.critics_rating} <span>&#x2B50; </span></p>
                      </div>

                      <p>Artists:</p>
                    </div>

                    <div className="artistsphotodiv" key={index}>
                      <div className="aphoto" key={data.title}>
                        <img src={data.artists[0].profile_url} alt="Image not Found" />
                        <div className="artistsname">
                          <p>{data.artists[0].first_name + "..."}</p>
                        </div>
                      </div>

                    </div>
                  </>
                )
              }
              if (data.artists.length > 1 && id === data.id) {
                return (
                  <>
                    <div className="rating" key={data.duration}>
                      <div >
                        <p>Rate this movie</p>
                        <p>{data.critics_rating} <span>&#x2B50; </span></p>
                      </div>
                      <p>Artists:</p>
                    </div>

                    <div className="artistsphotodiv" key={data.id}>

                      <div className="aphoto" key={index}>
                        <img src={data.artists[0].profile_url} alt="Image not Found" />

                        <div className="artistsname" >
                          <p>{data.artists[0].first_name + "..."}</p>
                        </div>
                      </div>

                      <div className="aphoto" key={data.id}>
                        <img src={data.artists[1].profile_url} alt="" />
                        <div className="artistsname">
                          <p>{data.artists[1].first_name + "..."}</p>
                        </div>
                      </div>

                    </div>
                  </>
                )
              }

            })
          }
        </div>
      </div>
    </>
  )
}

export default Detail