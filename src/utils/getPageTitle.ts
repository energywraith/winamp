export const getPageTitle = (songName?: string | null) => {
  return songName
    ? `Winamp - ${songName}`
    : "Winamp - Listen to music as in the old days";
};
