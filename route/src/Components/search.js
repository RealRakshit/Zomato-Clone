import React from 'react'
import "./search.css"
import SingleNote from './SingleNote';
import { useState } from 'react';

function Search() {
    let[search,setSearch]=useState("");
    let notes=["Gwalior","Bhopal","Indore","Guwahati","Satna","Jaigaon","Delhi","Bangalore","Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana"];
    let[notes2,setNotes2]=useState([]);

    function updateText(event){
        setSearch(event.target.value);
    }
    function findSearch(){
        setNotes2(notes.filter(note => note.toLowerCase().includes(search.toLowerCase())));
    }
  return (
    <div>
        
        <div>
        <input type="text" id="searchbar" onChange={updateText}/>
        <button onClick={findSearch}>search</button>
        </div>
        
        <ul className='ul'>
            {notes.map((note,index)=>
                (<li key={index}><SingleNote note={note}  notes2={notes2}/></li>)
            )}
        </ul> 

    </div>
  )
}

export default Search