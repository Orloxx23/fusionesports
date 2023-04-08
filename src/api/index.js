export const getValorantTeam = async (teamId) => {
  let team;
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  await fetch(`/team/${teamId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log("🚀 ~ file: index.js:11 ~ .then ~ result:", result);
      team = JSON.parse(result);
    })
    .catch((error) => console.log("error", error));

  return team;
};
