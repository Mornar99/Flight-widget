import { useState } from "react";

const TableLetter = ({ letter, _index }) => {

    const [flip, setFlip] = useState(false)

    setTimeout(() => {
        setFlip(true)
    }, 100 * _index)//code, delay

    return(
        <div id="letter" className={flip ? 'flip' : null}>
            {flip ? letter : null}
        </div>
    )
}

export default TableLetter;
//ova komponenta je dodana samo kako bi moga napravit animaciju svakog slova u pravom momentu tako da odbrojavam 100 * _index