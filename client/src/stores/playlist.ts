import { Playlist } from "@/types/playlist";
import { defineStore } from "pinia";
import type { Song } from "@/types/song";
import useYtdl from "@/services/ytdl";
import { usePlayerStore } from "./player";

// Currently song.id is based on youtube Id of the video,
// youtubeId is not always unique(if we add 2 songs to playlist),
// which will probably cause bugs

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

      try {
        const song = (await getAudioURL(id)) as Song;

        if (!song) {
          return;
        }

        this.playlist = [...this.playlist, song];
      } catch (error) {
        console.log(error);
      }
    },
    removeSongFromPlaylist(id: string) {
      this.playlist = this.playlist.filter((song) => song.id !== id);
    },
    clearPlaylist() {
      this.playlist = [];
    },
  },
});
