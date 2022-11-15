import React from 'react';
import axios from 'axios';
import styles from './Body.css';
import logo1 from './Vector.png'
import AddDynamicInput from './AddDynamicInput';
import { useState } from 'react';

class A extends React.Component {
    render() {
        return (
            <>
                <div className="Product_details">
                    <form className="row g-3 needs-validation" novalidate>
                        <div className="col-md-3">
                            <label for="validationCustom01" className="form-label">Product Name</label>
                            <input type="text" className="form-control" id="validationCustom01" name="Pname" value="Pname" />
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom04" className="form-label">Category</label>
                            <select className="form-select" id="validationCustom04" >
                                <option selected disabled value="">Food</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom04" className="form-label">Sub Category</label>
                            <select className="form-select" id="validationCustom04" >
                                <option selected disabled value="">Fruit</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom04" className="form-label">Brands</label>
                            <select className="form-select" id="validationCustom04" >
                                <option selected disabled value="">D-mart</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label for="validationCustom02" className="form-label">Product Description</label>
                            <textarea type="textarea" rows="4" resize="none" className="form-control" id="validationCustom02" value="doic" />
                        </div>
                        <div className="col-md-1">
                            <label for="validationCustom01" className="form-label">Length</label>
                            <input type="text" className="form-control" id="validationCustom01" value="6 inch" />
                        </div>
                        <div className="col-md-1">
                            <label for="validationCustom01" className="form-label">Width</label>
                            <input type="text" className="form-control" id="validationCustom01" value="2 inch" />
                        </div>
                        <div className="col-md-1">
                            <label for="validationCustom01" className="form-label">Height</label>
                            <input type="text" className="form-control" id="validationCustom01" value="5 inch" />
                        </div>
                        <div className="col-md-2">
                            <label for="validationCustom01" className="form-label">Weight in Kg</label>
                            <input type="text" className="form-control" id="validationCustom01" value="5 inch" />
                        </div>
                        <div className="col-md-1">
                            <label for="validationCustom01" className="form-label">Color</label>
                            <input type="text" className="form-control" id="validationCustom01" value="5 inch" />
                        </div>
                        <div className="col-md-2">
                            <label for="validationCustom01" className="form-label">Relative Size</label>
                            <input type="text" className="form-control" id="validationCustom01" value="5 inch" />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary" type="Upload Image"  >upload Image</button> &nbsp;
                            <input type="file" placeholder="Upload Image" accept="image /*" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

class B extends React.Component {
    render() {
        return (
            <div className="col-12">
                <button className="btn btn-primary sub" style={{
                    background: '#17697B'
                }} type="submit">Submit form</button>
            </div>
        );
    }
}

function Body() {
    return (
        <div className='color'>
            <p className="int">ADD PRODUCT</p>
            <A />
            <A />
            <div className='addItemPos'>
                <AddDynamicInput/>
            </div>
            <B />
        </div>
    );
}
export { A }
export default Body;