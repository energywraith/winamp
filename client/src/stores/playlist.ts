import { Playlist } from "@/types/playlist";
import { defineStore } from "pinia";
import type { Song } from "@/types/song";
import useYtdl from "@/services/ytdl";
import { usePlayerStore } from "./player";

export const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    playlist: [] as Playlist,
  }),
  getters: {
    getSongDetails(state): (index: number) => Song {
      return (index) => state.playlist[index];
    },
    getCurrentSongDetails(): Song | null {
      const playerStore = usePlayerStore();

      if (typeof playerStore.currentSongIndex !== "number") {
        return null;
      }

      return this.getSongDetails(playerStore.currentSongIndex);
    },
    getSongIndex(state): (id: string) => number {
      return (id) => state.playlist.findIndex((song) => song.id === id);
    },
  },
  actions: {
    async addSongToPlaylist(id: string) {
      const { getAudioURL } = useYtdl();
      const song = (await getAudioURL(id)) as Song;

      this.playlist = [...this.playlist, song];
    },
    removeSongFromPlaylist(id: string) {
      this.playlist = this.playlist.filter((song) => song.id !== id);
    },
    clearPlaylist() {
      this.playlist = [];
    },
  },
});
