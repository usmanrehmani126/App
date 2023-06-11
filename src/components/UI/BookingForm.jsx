import React from "react";
import { Form, FormGroup } from "reactstrap";
import "../../styles/booking-form.css";
const BookingForm = () => {
  const submitHnalder = (event) => {
    event.preventDefault();

  };
  return (
    <Form onSubmit={submitHnalder}>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Enter First Name" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Enter Last Name" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Enter Your Number" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5 person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 Luggage">1 Luggage</option>
          <option value="2 Luggage">2 Luggage</option>
          <option value="3 Luggage">3 Luggage</option>
          <option value="4 Luggage">4 Luggage</option>
          <option value="5+ Luggage">5+ Luggage</option>
        </select>
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="time" placeholder="Journey Time" className="time_picker" />
      </FormGroup>
      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write Something Here"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
