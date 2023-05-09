import { Component } from "react";

export default class EducationInfo extends Component {
  render() {
    return (
      <section>
        <fieldset>
          <legend>Educational Information</legend>
          <label>
            <span className="sr-only">Institution</span>
            <input type="text" placeholder="Institution"></input>
          </label>
          <label>
            <span className="sr-only">Location</span>
            <input type="text" placeholder="Location"></input>
          </label>
          <label>
            <span className="sr-only">Degree</span>
            <input type="text" placeholder="Degree Type"></input>
          </label>
          <label>
            <span className="sr-only">Field of Study</span>
            <input type="text" placeholder="Field Of Study"></input>
          </label>
          <label>
            <span className="sr-only">Graduation Date</span>
            <input type="text" placeholder="Graduation Date"></input>
          </label>
        </fieldset>
      </section>
    );
  }
}
