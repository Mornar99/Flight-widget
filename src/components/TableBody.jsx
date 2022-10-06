//vamo je glavno, tu povlacim podatke iz baze

import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const TableBody = ({ searchText }) => {

  const [flights, setFlights] = useState(null)
  
  const getFlights = () => {
    fetch('http://localhost:8000/flights')
    .then(response => response.json())
    .then(flights => setFlights(Object.values(flights.data)))//uzea sam samo data i povadia samo vrijednosti objekta
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getFlights()
  },[])

  console.log(flights)
  
  const [searchedFlights, setSearchedFlights] = useState(null)
  useEffect(() => {
    setSearchedFlights(flights)
  }, [flights])//namistam da bude searchedFlights = flights kad se flights napuni


  //FILTRIRANJE flights PREMA searchText
  //OBAVEZNO KORISTIT useEffect jer onda se filter poziva samo kad se promini searchText, inace imam "too many re-renders", jer se setFlights koristi unutar komponente tj unutar render funkcije
  //https://stackoverflow.com/questions/69376595/getting-a-too-many-re-renders-error-with-react-hooks
  useEffect(() => {
    if(flights)//mora bit ovaj if jer se useEffect zna pokrenit prije nego se flights napuni pa filter nemoze citat null pa problem
    {
      const newFlights = flights.filter((flight) => Object.values(flight).toString().toLowerCase().includes(searchText.toLowerCase()))
      setSearchedFlights(newFlights)//na ovaj nacin flights ostaju uvik isti a minja se samo searchedFlights
    }
  },[searchText])//kako se minja searchText tako se minja i searchedFlights array kojeg ispisujem


  const MappedFlights = () => {
    if(searchedFlights){
      return( 
          searchedFlights.map((flight, _index) => (
            <TableRow key={_index} flight={flight} />
          ))
      )
    }
  }

    return(
      <div>
        <tbody>
          {searchedFlights && <MappedFlights />}
          {searchedFlights.length === 0 && <div id="not-found">Flight not found.</div>} 
        </tbody>
      </div>
    )
  }
  
  export default TableBody;