export async function getVideos() {
  let videos;
  let requestOptions = {
    method: "GET",
  };

  await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${process.env.REACT_APP_YOUTUBE_PLAYLIST_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => (videos = JSON.parse(result).items))
    .catch((error) => console.log("error", error));

  return videos;
}
