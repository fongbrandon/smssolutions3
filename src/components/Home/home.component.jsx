import './home.component.css';
import React,{useState,useEffect} from 'react';
import Card from '../Card/card.component';
import Details from '../Details/details.component'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
function Home() {

  const [people,setPeople]=useState([]);
  const [home,setHome]=useState([]);
  const [ship,setShip]=useState([]);
  const [loading,setLoading]=useState(true);
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  const [person, setPerson] = useState(0);

  useEffect(()=>{
    async function fetchpeople(){
      try {
        setLoading(true);
        // let res = await fetch('https://swapi.co/api/people/?format=json');
        let res = await fetch('https://swapi.dev/api/people');
        let res1 = await fetch('https://swapi.dev/api/planets/');
        let res2 = await fetch('https://swapi.dev/api/starships');
        let data = await res.json();
        let data1 =await res1.json();
        let data2 =await res2.json();
        setPeople(data.results);
        setHome(data1.results);
        setShip(data2.results);
        setLoading(false);        
      } catch (error) {
        console.log(error)
      }
    }
    fetchpeople();
  },[])

  return (
    <Router>
    <div className="Home">
      {
        !loading && 
        <>{
          people.map((person) => {
            return <div className='item'>
              <Link to={`/detail`}>
                <Card person={person} key={person.name}/>
              </Link>
            </div>
          }
          )
          }
          {/*for(var i=0;i<people.length;i++){
            <div className='item'>
              <Link to='/detail'>
                <Card person={i} key={i.name}/>
              </Link>
            </div>
          }*/}
        </>
      }
     
    </div>
    </Router>
  );
}

export default Home;
