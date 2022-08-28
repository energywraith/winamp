import parseSecondsToMinutes from "@/utils/parseSecondsToMinutes";
import formatTime from "@/utils/formatTime";
import type { Song } from "@/types/song";

export default (song: Song) => {
  if (!song) return "";

  const { minutes, seconds } = parseSecondsToMinutes(+song.durationInSeconds);

  return `${song.author} (${formatTime(minutes, seconds)}) - ${song.name}`;
};
