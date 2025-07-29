import React from "react";

const Education = () => {
  // const [hidden, setHidden] = useState(true);

  // const toggleHidden = () => {
  //   setHidden((prev) => !prev);
  // };

  return (
    <div className="education section" id="education">
      <h2 className="title">Education.</h2>
      <div className="section_content_container">
        <ul className="section_text_content education">
          <li className="section_text_content_item">
            <p>Free University of Tbilisi | 2017-2021</p>
            <p>Bachelor of Business Administration (ESM)</p>
            <p>
              Relevant coursework in Programming: Programming Methodologies, Web
              Development – JavaScript, Working with Databases - SQL
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
