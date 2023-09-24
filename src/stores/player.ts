import type { VNodeRef } from "vue";
import { usePlaylistStore } from "@/stores/playlist";
import { PlayStates } from "@/types/playStates";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerRef: null as VNodeRef | null,
    currentSongIndex: 0 as number | null,
    isPlaying: false,
    playState: "STOPPED" as PlayStates,
    shuffleMode: false,
    repeatMode: false,
    volume: 100,
    balance: 100,
    seeking: "0",
    resumeOnSeekingEnd: undefined as boolean | undefined,
    duration: "0",
  }),
  getters: {
    getVolume(): number {
      return +this.volume / 100;
    },
  },
  actions: {
    resume() {
      this.isPlaying = true;
      this.playState = "PLAYING";
    },
    pause() {
      this.isPlaying = false;
      this.playState = "PAUSED";
    },
    stop() {
      this.pause();
      this.setPlayingTime("0");
      this.playState = "STOPPED";
    },
    skip() {
      if (typeof this.currentSongIndex !== "number") return;

      const playlistStore = usePlaylistStore();

      if (this.currentSongIndex >= playlistStore.playlist.length - 1) {
        this.currentSongIndex = 0;
        this.stop();
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
    setDuration(duration: string) {
      this.duration = duration;
    },
    toggleShuffleMode() {
      //
    },
    toggleRepeatMode() {
      //
    },
  },
});
