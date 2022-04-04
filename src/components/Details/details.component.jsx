import './details.component.css'
import { useState,useEffect } from 'react'
import Card1 from '../../assets/Card.svg'
import Deck from '../../assets/Deck.svg' ;
import Female from '../../assets/Gender-Female.svg' ;
import male from '../../assets/Gender-Male.svg' ;
import HomeWorld from '../../assets/Homeworld.svg' ;
import Search from '../../assets/Search.svg' ;
import Starship from '../../assets/Starship.svg' ;
import Vehicle from '../../assets/Vehicle.svg' ;
import { useSelector, useDispatch } from 'react-redux'


export default function Details({person}){
    const [home, setHome]=useState({});
    const [species, setSpecies]=useState({});
    const [loading, setLoading]=useState(true);
    //const [person, setPerson]=useState({});
    useEffect(()=>{
        console.log(person);
        //setPerson(person);
        async function compare(){
            try{
                setLoading(true);

                let res1 = await fetch(person.homeworld);
                let data1 = await res1.json();

                setHome(data1);


                let res2 = await fetch(person.species[0]);
                let data2 = await res2.json();

                setSpecies(data2);


                setLoading(false);  
              } catch (error) {
                console.log(error)
              }
        }

        compare();
    },[])

    return (
        <div className='Details'>
            
            <div>
                <div className='nameicon'><img src={Deck} alt="" height='15px;' /></div>
                <div>Name: {person.name}</div>
            </div>
            <div className='first-contaier'>
                <div><img src={male} alt="" height='15px;' />Gender {person.gender}</div>  
                <div className='sp'>Species {!loading && species.name ? species.name : 'None'}</div>
            </div>
            
            <div>
            <img src={HomeWorld} alt="" height='15px;' />
                Homeworld { !loading && home.name}
            </div>
            
            <div>
            <img src={Starship} alt="" height='15px;' />
                Starships: {person.starships}
            </div>
            <div>
            <img src={Vehicle} alt="" height='15px;' />
                Vehicles {person.vehicles}
            </div>
        </div>
    )
}