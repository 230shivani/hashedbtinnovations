import React, { useEffect, useState } from "react";

const PointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR); // ascending sort
        setTeams(sortedData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>IPL 2022 Points Table</h2>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ background: "#f4f4f4" }}>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Played}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
