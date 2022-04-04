import './card.component.css'
import { useState,useEffect } from 'react'


export default function Card({person}){
    const [home,setHome]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        async function fetchHome(){
            try {
              setLoading(true);
              // let res = await fetch('https://swapi.co/api/people/?format=json');
              let res1 = await fetch('https://swapi.dev/api/planets/');
              let data1 = await res1.json();
              setHome(data1.results);
              setLoading(false);        
            } catch (error) {
              console.log(error)
            }
          }
          fetchHome();
      console.log(home[0])
    }, [])
    var ship=home.name
    var shipcount=ship.length
    return (
        <div className='Card'>
            
            <div>
                Name: {person.name}
            </div>
            <div>
                Homeworld {shipcount}
            </div>
            <div>
                Gender {person.gender}
            </div>
            <div>
                Species {person.res}
            </div>
            <div>
                Starships {person.starships}
            </div>

        </div>
    )
}