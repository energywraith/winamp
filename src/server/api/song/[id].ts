import ytdl from "ytdl-core";
import { parseSong } from "~~/src/utils/parseSong";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const audio = await ytdl.getInfo(id);
  const audioStreams = ytdl.filterFormats(audio.formats, "audioonly");

  return parseSong({
    videoId: id,
    videoDetails: audio.videoDetails,
    formats: audioStreams,
  });
});
