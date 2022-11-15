import React from "react";
import { useState } from "react";
import Body from "./Body";
import { A } from "./Body";
import styles from './AddDynamicInput.css';

function AddDynamicInput() {
    const [val, setVal] = useState([])
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal.splice(i)
        setVal(deleteVal)
    }
    console.log(val, "data")
    return (
        <>
            <button onClick={() => handleAdd() } className="icondesign" ><i className="fa fa-plus-square  fa-2x"  aria-hidden="true"></i></button>
            {val.map((data, i) => {
                return (
                    <div>
                        <div onChange={e => handleChange(e, i)}>
                            <A />
                        </div>
                    </div>
                )
            }
            )}
        </>
    )
}
export default AddDynamicInput;
