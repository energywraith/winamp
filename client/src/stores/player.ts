import { defineStore } from "pinia";
import type { VNodeRef } from "vue";
import { usePlaylistStore } from "@/stores/playlist";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerRef: null as VNodeRef | null,
    currentSongIndex: 0 as number | null,
    isPlaying: false,
    shuffleMode: false,
    repeatMode: false,
    volume: 100,
    balance: 100,
    seeking: "0",
    resumeOnSeekingEnd: undefined as boolean | undefined,
  }),
  getters: {
    getVolume(): number {
      return +this.volume / 100;
    },
  },
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
      if (typeof this.currentSongIndex !== "number") return;

      const playlistStore = usePlaylistStore();

      if (this.currentSongIndex >= playlistStore.playlist.length - 1) {
        return;
      }

      this.currentSongIndex++;
    },
    previous() {
      if (!this.currentSongIndex || this.currentSongIndex <= 0) {
        return;
      }

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
    setVolume(volume: number) {
      this.volume = volume;
    },
    setBalance(balance: number) {
      this.balance = balance;
    },
    setSeeking(time: number) {
      this.seeking = time.toString();
    },
    setPlayerRef(ref: VNodeRef) {
      this.playerRef = ref;
    },
    setCurrentSongIndex(index: number) {
      this.isPlaying = false;
      this.currentSongIndex = index;
    },
    toggleShuffleMode() {
      //
    },
    toggleRepeatMode() {
      //
    },
  },
});
