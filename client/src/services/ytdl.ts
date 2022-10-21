import { Song } from "@/types/song";
import addBaseURL from "@/utils/addBaseURL";
import parseSong from "@/utils/parseSong";
import parseYoutubeId from "@/utils/parseYoutubeId";

const baseURL = "api/youtube";

const useYtdl = () => {
  const getAudioURL = async (songURLOrId: string) => {
    try {
      const parsedId = parseYoutubeId(songURLOrId);

      const audio = await fetch(addBaseURL(`audioURL/${parsedId}`, baseURL));
      const { data } = await audio.json();

      return parseSong(data) as Song;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAudioURL };
};

export default useYtdl;
