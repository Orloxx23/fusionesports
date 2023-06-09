export const getValorantTeam = async (teamId) => {
  let team;
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  await fetch(`${process.env.REACT_APP_API_URL}/v1/teams/${teamId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      team = result.data;
    })
    .catch((error) => console.log("error", error));

  return team;
};
