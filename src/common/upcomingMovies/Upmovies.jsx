import React from 'react'
import '../upcomingMovies/Upmovies.css'
import Data from '../../common/moviedata/moviesData';

function Upmovies() {
    console.log(Data)
  return (
  <>
  <div id="upcomigMovie">

      <div id="heading">
        <h3>Upcoming Movies</h3>
      </div>
      
       <div id="upcomingmovies">

        {
            Data.map((data)=>{
                return(
                
                    <div className="topmovies" key={data.id}>
                    <img src={data.poster_url} alt="" />
                  
                    <div className="movietitle" >
                    <h3>{data.title}</h3>
                    </div>

                    </div>

                    
                    
                )
            })
        } 
      
       </div>



    </div>
  </>
  )
}

export default Upmovies