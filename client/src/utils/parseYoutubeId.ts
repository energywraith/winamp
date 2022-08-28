const parseYoutubeId = (url: string) =>
  url.includes("watch?v=") ? url.split("watch?v=")[1] : url;

export default parseYoutubeId;
