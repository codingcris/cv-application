import { Component } from "react";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import ProfessionalExperience from "./ProfessionalExperience";
import "./cv-builder.scss";
import PersonalImage from "./PersonalImage.js";
import SectionHandler from "./SectionHandler";

export default class CVBuilder extends Component {
  render() {
    return (
      <div id="cv-edit">
        <header className="header">
          <PersonalImage></PersonalImage>
          <textarea
            name="professional-summary"
            placeholder="Professional Summary"
            id="pro-summary"
          ></textarea>
        </header>
        <form className="cv">
          <PersonalInfo></PersonalInfo>
          <div className="educational">
            <SectionHandler Component={EducationInfo}></SectionHandler>
          </div>
          <div className="professional">
            <SectionHandler Component={ProfessionalExperience}></SectionHandler>
          </div>
        </form>
      </div>
    );
  }
}
