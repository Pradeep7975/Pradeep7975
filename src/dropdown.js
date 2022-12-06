import "./styles.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Drop() {
  return (
    <div className="dropdown">
      <Dropdown>
        <div className="cliker">

          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <h4>click here for courses</h4>
          </Dropdown.Toggle>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item href="/c.html">
            c language
          </Dropdown.Item>{" "}
       
          <Dropdown.Item href="/cplusplus.html">
            c++ language
          </Dropdown.Item>{" "}

          <Dropdown.Item href="/python.html">
            Python language
          </Dropdown.Item>{" "}
  
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Drop;