import React from "react";
import "./WorkCard.css";
import { Typography } from "@mui/material";

function WorkCard(props) {
  const companyLogo = props.companyLogo;
  const companyName = props.companyName;
  const jobDates = props.jobDates;
  const jobTitle = props.jobTitle;
  let startDate = new Date();
  startDate.setMonth(jobDates[0].slice(0, 2) - 1);
  startDate.setFullYear(jobDates[0].slice(3, 7));
  startDate.setDate(1);

  let endDate = new Date();
  endDate.setMonth(jobDates[1].slice(0, 2) - 1);
  endDate.setFullYear(jobDates[1].slice(3, 7));
  endDate.setDate(17);

  const difference = endDate - startDate;
  let displayedDifference = difference / 2.628e9;
  const options = { year: "numeric", month: "short" };
  if (displayedDifference > 12) {
    let years = Math.round(displayedDifference / 12);
    displayedDifference = years + " years";
  } else {
    displayedDifference = Math.round(displayedDifference);
    displayedDifference = displayedDifference + " months";
  }
  const displayedDate =
    startDate.toLocaleDateString("EN-US", options) +
    " - " +
    endDate.toLocaleDateString("EN-US", options) +
    ", " +
    displayedDifference;
  return (
    <>
      <div className="work-card">
        <table className="card-table">
          <tr>
            <th rowSpan="2" style={{ width: "10%" }}>
              <div className="photo-holder">
                <img width={40} src={companyLogo}></img>
              </div>
            </th>
            <th className="company-name" style={{ width: "50%" }}>
              <Typography fontWeight={700}>{companyName}</Typography>
            </th>
            <th className="date-section" style={{ width: "40%" }}>
              <p className="date">{displayedDate}</p>
            </th>
          </tr>
          <tr>
            <th colSpan="2" className="work-details">
              <p className="work-details-text">{jobTitle}</p>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
}

export default WorkCard;
