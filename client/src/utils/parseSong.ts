interface Props {
  videoId: string;
  videoDetails: {
    title: string;
    lengthSeconds: string;
    author?: {
      name: string;
    };
  };
  formats: {
    url: string;
  }[];
}

const parseSong = (songData: Props) => ({
  id: songData.videoId,
  durationInSeconds: songData.videoDetails.lengthSeconds,
  author: songData.videoDetails.author?.name,
  name: songData.videoDetails.title,
  youtubeId: songData.videoId,
  playbackURL: songData.formats[0].url,
});

export default parseSong;
