import React from "react";

function Catbody() {
    return (
        <>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Category</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Food</option>
                    <option>...</option>
                </select>
                <div class="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Sub Category</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Fruit</option>
                    <option>...</option>
                </select>
                <div class="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Brands</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">D-mart</option>
                    <option>...</option>
                </select>
                <div class="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
        </>
    );
}