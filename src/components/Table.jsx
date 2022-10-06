import TableHead from './TableHead'
import TableBody from './TableBody'
import Search from './Search';
import { useState } from 'react';

const Table = () => {

  const [searchText, setSearchText] = useState('')
  //console.log(searchText)

    return(
      <div>
        <Search handleSearch={setSearchText}/>
        <table>
          <TableHead />
          <TableBody searchText={searchText}/>
        </table>
      </div>
    )
  }
  
  export default Table;
  //stvait cu Search komponentu vamo i sve sta je searchano slat u TableBody kao prop kako bi izbaciva samo searchano