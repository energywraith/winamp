import { defineStore } from "pinia";
import type { VNodeRef } from "vue";
import { usePlaylistStore } from "@/stores/playlist";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerRef: null as VNodeRef | null,
    currentSongIndex: null as number | null,
    isPlaying: false,
    shuffleMode: false,
    repeatMode: false,
    volume: "0",
    seeking: "0",
    resumeOnSeekingEnd: undefined as boolean | undefined,
  }),
  getters: {},
  actions: {
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
    skip() {
      const playlistStore = usePlaylistStore();

      if (!this.currentSongIndex) return;

      if (this.currentSongIndex > playlistStore.playlist.length - 1) {
        this.currentSongIndex = 0;
        return;
      }

      this.currentSongIndex++;
    },
    previous() {
      if (!this.currentSongIndex || this.currentSongIndex <= 0) return;
      this.currentSongIndex--;
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
    toggleShuffleMode() {
      //
    },
    toggleRepeatMode() {
      //
    },
  },
});
