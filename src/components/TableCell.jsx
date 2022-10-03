import TableLetters from "./TableLetters";

const TableCell = ({ flight }) => {
    return(
      <td>
        <td id="time"><TableLetters word={flight.departing}/></td>
        <td id="destination"><TableLetters word={flight.destination}/></td>
        <td id="flight"><TableLetters word={flight.flightNumber}/></td>
        <td id="gate"><TableLetters word={flight.gate}/></td>
        <td id="remarks"><TableLetters word={flight.status}/></td>
      </td>
    )
  }
  
  export default TableCell;
  //mora bit td(table data) inace budu slozeni jedno ispod drugog