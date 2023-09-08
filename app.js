const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const userName = req.query.slack_name;
  const track = req.query.track;
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const today = weekDays[date.getDay()];
  const utcTime = date.toISOString();

  const response = {
    slack_name: "Edu",
    current_day: today,
    utc_time: utcTime,
    track: "backend",
    github_file_url: "",
    github_repo_url: "",
    status_code: 200,
  };
});

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`App listening on PORT ${port}...`);
});
