import TableLetter from "./TableLetter";

const TableLetters = ({ word }) => {

    return(
        <td id="letters-container">
            {
                Array.from(word).map((letter, _index) => (
                    <TableLetter letter={letter} _index={_index}/>
                ))
            }
        </td>
    )
}

export default TableLetters;