import './Sort.css';
import React, { useState } from 'react'
import { SelectionSort } from './SelectionSort';
import { BubbleSort } from './BubbleSort';

export default function Sort() {
    var algoType;
    const [arr, setArray] = useState([]);
    const [numElements, setNumElements] = useState(0);
    const [runningStatus, setRunningStatus] = useState(0);

    function generate_array() {
        let tarr = [];
        for (let i = 0; i < numElements; i++) {
            tarr.push(Math.floor((Math.random() * 100) + 1));
        }
        setArray(tarr);
        console.log(tarr);
    }

    async function handleClick() {
        algoType = parseInt(document.getElementById('selectAlgoType').value);
        console.log(algoType);
        setRunningStatus((runningStatus) => runningStatus + 1);
        switch(algoType) {
            case 0: { await SelectionSort()}; break;
            case 1: { await BubbleSort()}; break;
            default:{ await SelectionSort()}; break;
        }
        setRunningStatus(0);
    }

    return (
        <div>
            <div>
                <label>Number of Elements </label>
                <input type="number" className='mx-3' onChange={(e) => { setNumElements(parseInt(e.target.value)) }} />
            </div>
            <div className='my-3'>
                <label>Select type of Algorithm </label>
                <select className='mx-3' id="selectAlgoType">
                    <option value="0">Selection Sort</option>
                    <option value="1">Bubble Sort</option>
                </select>
            </div>
            <button type="button" disabled={runningStatus===1} id='new_array' className="btn btn-primary my-3" onClick={generate_array}>Generate Random Array</button>
            <div>
                {arr.map((item, index, id) => {
                    return <div className='bar' key={index} style={{
                        width: `${item*10}px`
                    }
                    }>
                        {item}
                    </div>
                })}
            </div>
            <button type="button" disabled={runningStatus===1 } className="btn btn-danger my-3" onClick={handleClick}>Sort</button>
        </div>
    )
}
