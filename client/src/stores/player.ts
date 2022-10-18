import { Song } from "@/types/song";
import { defineStore } from "pinia";
import useYtdl from "@/services/ytdl";
import { VNodeRef } from "vue";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    currentSong: null as Song | null,
    playerRef: null as VNodeRef | null,
    isPlaying: false,
    shuffleMode: false,
    repeatMode: false,
    volume: "0",
    seeking: "0",
    resumeOnSeekingEnd: undefined as boolean | undefined,
  }),
  getters: {},
  actions: {
    async play(id: string) {
      this.currentSong = null;
      this.stop();

      const { getAudioURL } = useYtdl();
      this.currentSong = (await getAudioURL(id)) as Song;
    },
    resume() {
      this.isPlaying = true;
    },
    pause() {
      this.isPlaying = false;
    },
    stop() {
      this.pause();
      this.setPlayingTime("0");
    },
    setPlayingTime(time: string) {
      this.seeking = time;

      if (this.resumeOnSeekingEnd === undefined && this.isPlaying) {
        this.resumeOnSeekingEnd = true;
      }

      this.pause();

      if (!this.playerRef) return;
      this.playerRef.currentTime = +time;
    },
    setVolume(volume: string) {
      this.volume = volume;
    },
    setSeeking(time: number) {
      this.seeking = time.toString();
    },
    setPlayerRef(ref: VNodeRef) {
      this.playerRef = ref;
    },
    skip() {
      //
    },
    previous() {
      //
    },
    toggleShuffleMode() {
      //
    },
    toggleRepeatMode() {
      //
    },
  },
});
