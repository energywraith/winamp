import type { Ref } from "vue";
import type { Song } from "@/types/song";
import type { Playlist } from "@/types/playlist";

export type Player = {
  state: {
    audioRef: Ref<HTMLAudioElement | null>;
    playlist: Ref<Playlist>;
    currentSong: Ref<Song | null>;
    currentSongSeeking: Ref<string>;
    isPlaying: Ref<boolean>;
    volume: Ref<string>;
    balance: Ref<string>;
    seeking: Ref<string>;
    shuffleMode: Ref<boolean>;
    repeatMode: Ref<boolean>;
  };
  methods: {
    previous: () => void;
    play: (songId: string) => Promise<Song | undefined>;
    skip: () => void;
    pause: () => void;
    resume: () => void;
    stop: () => void;
    openFile: () => void;
    toggleShuffleMode: () => void;
    toggleRepeatMode: () => void;
    timeUpdate: (time: number) => void;
    setVolume: (volume: string) => void;
    setBalance: (balance: string) => void;
    setPlayingTime: (time: string) => void;
  };
};
