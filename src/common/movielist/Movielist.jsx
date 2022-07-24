import React, {  useRef, useState} from "react";
import "../movielist/Movielist.css";
import Data from "../../common/moviedata/moviesData";
import Genres from "../genresData/Genres";
import Artists from "../artistsData/Artists";
import { Link } from "react-router-dom";

function Movielist() {
  
  const showcheckbox = useRef("");
  const changesymbol = useRef("");
  const nfocus = useRef();
  const showcheckbox2 = useRef();
  const changesymbol2 = useRef();
  const nfocus2 = useRef();
  let genres = useRef();
  let artists = useRef();
  const showselectmovie = useRef();
  const [user , setuser] = useState("")
  const [mmname , setmmname] = useState("")
 
 let fn ;
  function click(e){
    e.preventDefault();
    const data = new FormData(e.target)
    let ff = Object.fromEntries(data.entries());
    console.log(Object.fromEntries(data.entries()))
    
      setmmname(ff.moviename)
      Data.map((data, index)=>{
        let i = "/detail/";
        let id = i + data.id;
        if (ff.moviename === data.title  &&  data.genres.includes(ff.genresname) ){
          console.log("running...")
         return(
          setuser(<div className="movies" key={data.duration}>
          < Link to={id}>
            <img src={data.poster_url} alt="" />
          </Link>
          </div>))
        }
      })
  };

  function showlist() {
    if (showcheckbox.current.style.display === "flex") {
      showcheckbox.current.style.display = "none";
      changesymbol.current.innerHTML = "&#9660;";
      nfocus.current.style.backgroundColor = "white";
    } else {
      showcheckbox.current.style.display = "flex";
      changesymbol.current.innerHTML = "&#9650;";
      nfocus.current.style.backgroundColor = "aliceblue";
    }
  }


  function showlist2() {
    if (showcheckbox2.current.style.display === "flex") {
      showcheckbox2.current.style.display = "none";
      changesymbol2.current.innerHTML = "&#9660;";
      nfocus2.current.style.backgroundColor = "white";
    } else {
      showcheckbox2.current.style.display = "flex";
      changesymbol2.current.innerHTML = "&#9650;";
      nfocus2.current.style.backgroundColor = "aliceblue";
    }
  }


  let value;

  function moviegenres(e) {
    value = e.target.value;
    genres.current.innerHTML = value;
    genres.current.style.color = "black";
    
  }

  let value2, na;

   function movieartits(e) {
    value2= e.target.value;
    artists.current.innerHTML = value2;
    artists.current.style.color = "black";
    
  }
  
  let id;
  return (
    <>
    {/* All Movie Poster and Movies Show on Home Page Code start Fron here */}
      <div className="btnfilter">
        <button>Find Movie</button>
      </div>
      <div className="movielistdiv">
        <div className="movielist" ref={showselectmovie}>
          {Data.map((data, index) => {
            id = data.id;
             if(user === ""){
              return (
                <div className="movies" key={index}>
                  <Link to={"/detail/" + id}>
                    <img src={data.poster_url} alt="" />
                  </Link>
                </div>
              )}
              if( data.title === mmname ){
                 return user
             } 
          })
          }
        </div>
  
         {/*Movie Find Filter Code start from here */}

      <div className="moviefilter">
          <p className="blue">FIND MOVIES BY</p>
        <form onSubmit={click}>

          <div className="filter">
            <input
              placeholder="Movies Name"
              type="text"
              name="moviename"
              required="required"
              />
          </div>

          <div className="filter">
            <div className="divbetween" ref={nfocus}>
              <p className="grey" ref={genres}>
                Genres
              </p>
              <p className="downsymbol" onClick={showlist} ref={changesymbol}>
                &#9660;
              </p>
            </div>
          </div>
          <div className="checkboxlist" ref={showcheckbox}>
            {Genres.map((g, index) => {
              return (
                <li className="liststyle " key={index}>
                  {g.name}
                  <input
                    type="radio"
                    name="genresname"
                    value={g.name}
                    onChange={moviegenres}
                    required
                  />
                </li>
              );
            })}
          </div>

          <div className="filter">
            <div className="divbetween" ref={nfocus2}>
              <p className="grey" ref={artists}>
                Artists
              </p>
              <p className="downsymbol" onClick={showlist2} ref={changesymbol2}>
                &#9660;
              </p>
            </div>
          </div>
          <div className="checkboxlist" ref={showcheckbox2}>
            {Artists.map((g, index) => {
              {
                na = g.first_name + " " + g.last_name;
              }
              return (

                <li className="liststyle " key={index}>
                  {g.first_name} {g.last_name}
                  <input
                    type="radio"
                    name="artitsname"
                    value={na}
                    onChange={movieartits}
                    required
                  />
                </li>
              );
            })}
          </div>

          <div className="filter">
            <p className="padding">Release Date</p>
            <input
              className="grey"
              type="date"
              id="rdate"
              required
              name="sDate"/>
          </div>

          <div className="filter">
            <p className="padding">End Date</p>
            <input
              className="grey "
              type="date"
              placeholder="End Date"
              id="edate"
              required
              name="eDate"/>
          </div>

          <div className="abtn">
            <button className="applybtn" >
              Apply
            </button>
          </div>

          </form>
        </div>
        
      </div>
    </>
  );
}

export default Movielist;
