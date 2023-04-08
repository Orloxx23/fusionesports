export const getValorantTeam = async (teamId) => {
  let team;
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  await fetch(`${process.env.REACT_APP_API_URL}/team/${teamId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log("🚀 ~ file: index.js:11 ~ .then ~ result:", result);
      team = JSON.parse(result);
    })
    .catch((error) => console.log("error", error));

  return team;
};
