import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Card from './components/Card/card.component';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './assets/Card.svg' ;
import Deck from './assets/Deck.svg' ;
import Female from './assets/Gender-Female.svg' ;
import male from './assets/Gender-Male.svg' ;
import HomeWorld from './assets/Homeworld.svg' ;
import Search from './assets/Search.svg' ;
import Starship from './assets/Starship.svg' ;
import Vehicle from './assets/Vehicle.svg' ;
function App() {

  const [people,setPeople]=useState([]);
  const [loading,setLoading]=useState(true);
  
  useEffect(()=>{
    async function fetchpeople(){
      try {
        setLoading(true);
        // let res = await fetch('https://swapi.co/api/people/?format=json');
        let res = await fetch('https://swapi.dev/api/people');
        let data = await res.json();
        setPeople(data.results);
        setLoading(false);        
      } catch (error) {
        console.log(error)
      }
    }
    fetchpeople();
    console.log(people[0])
  },[])
  const [home,setHome]=useState([]);
  const [loading1,setLoading1]=useState(true);
    useEffect(() => {
        async function fetchHome(){
            try {
              setLoading1(true);
              // let res = await fetch('https://swapi.co/api/people/?format=json');
              let res1 = await fetch('https://swapi.dev/api/planets/');
              let data1 = await res1.json();
              setHome(data1.results);
              setLoading1(false);        
            } catch (error) {
              console.log(error)
            }
          }
          fetchHome();
      console.log(home[0])
    }, [])
    /*const [ship,setShip]=useState([]);
    useEffect(() => {
        async function fetchShip(){
            try {
              setLoading(true);
              // let res = await fetch('https://swapi.co/api/people/?format=json');
              let res2 = await fetch('https://swapi.dev/api/starships');
              let data2 = await res2.json();
              setShip(data2.results);
              setLoading(false);        
            } catch (error) {
              console.log(error)
            }
          }
          fetchShip();
      console.log(home[0])
    }, [])*/
  return (
    <div className="App">
      {
        !loading && 
        <>
          <Card person={people[0]} live={home[0]}/>
          {/*<Card person={people[0]} live={home[0]} />*/}
        </>
      }
    </div>
  );
}

export default App;
