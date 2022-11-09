export const youtubeLinkRegex =
  /(?:https?:\/\/)?(?:(?:www\.|m.)?youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9-_]{11})/g;

export const matchYoutubeLinkRegex = (string: string) =>
  string.match(youtubeLinkRegex);
