import ytdl from 'ytdl-core';

export const getAudioFromId = (songId: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const audio = await ytdl.getInfo(songId);
      const audioStreams = ytdl.filterFormats(audio.formats, 'audioonly');

      resolve({ videoDetails: audio.videoDetails, formats: audioStreams });
    } catch (error) {
      reject(error);
    }
  });
