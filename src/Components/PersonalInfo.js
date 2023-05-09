import { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <section className="personal-info">
        <fieldset>
          <legend>Personal and Contact Information</legend>
          <label>
            <span className="sr-only">First Name</span>
            <input
              type="text"
              placeholder="First Name"
              name="first-name"
            ></input>
          </label>
          <label>
            <input type="text" placeholder="Last Name" name="last-name"></input>
          </label>
          <label>
            <span className="sr-only">Home Address Line 1</span>
            <input type="text" placeholder="Address 1"></input>
          </label>
          <label>
            <span className="sr-only">Home Address Line 2</span>
            <input type="text" placeholder="Address 2"></input>
          </label>
          <label>
            <span className="sr-only">Telephone</span>
            <input type="tel" name="phone" placeholder="Telephone"></input>
          </label>
          <label>
            <span className="sr-only">Email</span>
            <input type="email" placeholder="Email"></input>
          </label>
        </fieldset>
      </section>
    );
  }
}
