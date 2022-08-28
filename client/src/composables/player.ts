import { provide, inject, ref } from "vue";
import { playerKey } from "@/keys";
import type { Player } from "@/types/player";
import type { Song } from "@/types/song";
import useYtdl from "@/services/ytdl";

const usePlayer = (INIT = false): Player => {
  if (!INIT) {
    return inject(playerKey) as Player;
  }

  const { getAudioURL } = useYtdl();

  const state = {
    audioRef: ref(null),
    playlist: ref(mockPlaylist || []),
    currentSong: ref(mockSong || null),
    currentSongSeeking: ref("0"),
    isPlaying: ref(false),
    volume: ref("100"),
    balance: ref("0"),
    seeking: ref("0"),
    shuffleMode: ref(false),
    repeatMode: ref(false),
  };

  const methods = {
    previous() {
      console.log("TODO: previous - use play");
    },
    async play(songId: string) {
      const ytdlSong = await getAudioURL(songId);

      state.currentSong.value = ytdlSong as Song;

      return ytdlSong;
    },
    skip() {
      console.log("TODO: skip - use play");
    },
    resume() {
      if (!state.audioRef.value) return;

      state.isPlaying.value = true;
      (state.audioRef.value as HTMLAudioElement).play();
    },
    pause() {
      if (!state.audioRef.value) return;

      state.isPlaying.value = false;
      (state.audioRef.value as HTMLAudioElement).pause();
    },
    stop() {
      methods.setPlayingTime("0");
    },
    openFile() {
      console.log("TODO: openFile - probably modal with youtube search?");
    },
    toggleShuffleMode() {
      state.shuffleMode.value = !state.shuffleMode.value;
    },
    toggleRepeatMode() {
      state.repeatMode.value = !state.repeatMode.value;
    },
    timeUpdate(time: number) {
      state.currentSongSeeking.value = time.toString();
    },
    setVolume(volume: string) {
      if (!state.audioRef.value) return;

      state.volume.value = volume;
      (state.audioRef.value as HTMLAudioElement).volume = +volume / 100;
    },
    setBalance(balance: string) {
      if (!state.audioRef.value) return;

      state.balance.value = balance;
    },
    setPlayingTime(time: string) {
      state.currentSongSeeking.value = time;

      (state.audioRef.value as unknown as HTMLAudioElement).currentTime = +time;
      (state.audioRef.value as unknown as HTMLAudioElement).pause();
    },
  };

  const player: Player = {
    state,
    methods,
  };

  provide(playerKey, player);

  return player;
};

const mockPlaylist = [
  {
    id: "1",
    durationInSeconds: "3:04",
    author: "Linkin Park",
    name: "Papercut",
  },
  {
    id: "2",
    durationInSeconds: "2:37",
    author: "Linkin Park",
    name: "One Step Closer",
  },
  {
    id: "3",
    durationInSeconds: "3:23",
    author: "Linkin Park",
    name: "With You",
  },
  {
    id: "4",
    durationInSeconds: "3:20",
    author: "Linkin Park",
    name: "Points of Authority",
  },
  {
    id: "5",
    durationInSeconds: "3:28",
    author: "Linkin Park",
    name: "Crawling",
  },
  {
    id: "6",
    durationInSeconds: "3:03",
    author: "Linkin Park",
    name: "Runaway",
  },
  {
    id: "7",
    durationInSeconds: "3:09",
    author: "Linkin Park",
    name: "By Myself",
  },
  {
    id: "8",
    durationInSeconds: "3:36",
    author: "Linkin Park",
    name: "In The End",
  },
  {
    id: "9",
    durationInSeconds: "3:04",
    author: "Linkin Park",
    name: "A Place for My Head",
  },
  {
    id: "10",
    durationInSeconds: "3:14",
    author: "Linkin Park",
    name: "Forgotten",
  },
  {
    id: "11",
    durationInSeconds: "2:37",
    author: "Linkin Park",
    name: "Cure for the Itch",
  },
  {
    id: "12",
    durationInSeconds: "3:11",
    author: "Linkin Park",
    name: "Pushing Me Away",
  },
  {
    id: "13",
    durationInSeconds: "3:11",
    author: "Linkin Park",
    name: "Pushing Me Away",
  },
  {
    id: "14",
    durationInSeconds: "3:11",
    author: "Linkin Park",
    name: "Pushing Me Away",
  },
];

const mockSong = {
  id: "1",
  durationInSeconds: "177",
  author: "Linkin Park",
  name: "A Place For My Head",
};

export default usePlayer;
