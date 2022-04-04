import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Card from './components/Card/card.component';
import Details from './components/Details/details.component'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [people,setPeople]=useState([]);
  const [home,setHome]=useState([]);
  const [ship,setShip]=useState([]);
  const [loading,setLoading]=useState(true);
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
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
    <div className="App">
      {
        !loading && 
        <>{
          people.map((person) => (
            <div className='item'>
              <Link to='/detail'>
                <Card person={person} key={person.name}/>
              </Link>
            </div>
          ))
          }

        </>
      }
      <Switch>
        <Route path="/detail" element={<Details person={0}/>} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
