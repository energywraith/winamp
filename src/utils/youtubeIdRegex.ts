export const youtubeIdRegex = /([a-zA-Z0-9-_]{11})/g;

export const matchYoutubeIdRegex = (string: string) =>
  string.match(youtubeIdRegex);
