import type { Song } from "~/types/song";

interface Props {
  videoId: string;
  videoDetails: {
    videoId: string;
    title: string;
    lengthSeconds: string;
    author: {
      name: string;
    };
  };
  formats: {
    url: string;
  }[];
}

export const parseSong = (songData: Props): Song => ({
  id: songData.videoDetails.videoId,
  durationInSeconds: songData.videoDetails.lengthSeconds,
  author: songData.videoDetails.author?.name,
  name: songData.videoDetails.title,
  youtubeId: songData.videoId,
  playbackURL: songData.formats[0].url,
});
