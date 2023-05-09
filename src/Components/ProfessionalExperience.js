import { Component } from "react";

export default class ProfessionalExperience extends Component {
  render() {
    return (
      <section>
        <fieldset>
          <legend>Professional Experience</legend>
          <label>
            <span className="sr-only">Job Title</span>
            <input type="text" placeholder="Title"></input>
          </label>
          <label>
            <span className="sr-only">Company</span>
            <input type="text" placeholder="Company"></input>
          </label>
          <label>
            <span className="sr-only">Location</span>
            <input type="text" placeholder="Location"></input>
          </label>
          <label>
            <span className="sr-only">Start Date</span>
            <input type="text" placeholder="Start Date"></input>
          </label>
          <label>
            <span className="sr-only">End Date</span>
            <input type="text" placeholder="End Date"></input>
          </label>
        </fieldset>
      </section>
    );
  }
}
