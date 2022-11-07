import { Song } from "@/types/song";
import addBaseURL from "@/utils/addBaseURL";
import parseSong from "@/utils/parseSong";
import parseYoutubeId from "@/utils/parseYoutubeId";

const baseURL = "api/youtube";

const useYtdl = () => {
  const getAudioURL = async (songURLOrId: string) => {
    try {
      const parsedId = parseYoutubeId(songURLOrId);

      const response = await fetch(addBaseURL(`audioURL/${parsedId}`, baseURL));

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const audio = await response.json();
      return parseSong(audio.data) as Song;
    } catch (error) {
      alert(error);
    }
  };

  return { getAudioURL };
};

export default useYtdl;
