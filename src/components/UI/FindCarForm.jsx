import React from "react";
import { Form, FormGroup } from "reactstrap";
import "../../styles/find-form.css";
const FindCarForm = () => {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap my-5">
        <FormGroup className="form-group">
          <input type="text" placeholder="From Address" required />
        </FormGroup>
        <FormGroup className="form-group">
          <input type="text" placeholder="To Address" required />
        </FormGroup>
        <FormGroup className="form-group">
          <input type="time" className="journeyTime" placeholder=" Journey Time" required />
        </FormGroup>
        <FormGroup className="form-group">
          <input type="date" placeholder=" Journey Date" required />
        </FormGroup>
        <FormGroup className="select_group">
          <select>
            <option value="ac">AC Car</option>
            <option value="none">Non AC Car</option>
          </select>
        </FormGroup>
        <FormGroup className="form-group">
          <button className=" find_btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
