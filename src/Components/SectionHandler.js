import React, { useState } from "react";

// Define the SectionHandler component
const SectionHandler = ({ Component, ...props }) => {
  // State to keep track of sections in the form
  const [sections, setSections] = useState([{}]);

  // Function to add a new section to the form
  const addSection = (e) => {
    e.preventDefault();
    // Update the sections state with a new empty section
    setSections([...sections, {}]);
  };

  // Render the component
  return (
    <>
      {/* Iterate through the sections and render the passed Component with the necessary props */}
      {sections.map((_, index) => (
        <Component key={index} index={index} {...props} />
      ))}

      {/* Render the "Add Section" button and add a new section when clicked */}
      <button onClick={addSection}>Add Section</button>
    </>
  );
};

// Export the SectionHandler component
export default SectionHandler;
