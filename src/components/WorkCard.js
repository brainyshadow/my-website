import React from "react";
import "./WorkCard.css";

function WorkCard(props) {
  const companyLogo = props.companyLogo;
  const companyName = props.companyName;
  return (
    <>
      <div className="work-card">
        <table>
          <tr>
            <th>
              <img width={40} src={companyLogo} className="photo"></img>
            </th>
            <th>
              <p>{companyName}</p>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
}

export default WorkCard;
