//vamo je glavno, tu povlacim podatke iz baze

import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const TableBody = () => {

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

  //console.log(flights)

  const MappedFlights = () => {
    if(flights){
      return( 
          flights.map((flight, _index) => (
            <TableRow key={_index} flight={flight} />
          ))
      )
    }
  }

    return(
      <div>
        <tbody>
          <MappedFlights />
        </tbody>
      </div>
    )
  }
  
  export default TableBody;