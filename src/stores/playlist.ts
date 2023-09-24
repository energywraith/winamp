import { Playlist } from "@/types/playlist";
import { usePlayerStore } from "./player";
import { parseYoutubeId } from "~/utils/parseYoutubeId";
import type { Song } from "@/types/song";

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
    async initPlaylist() {
      try {
        const songs = await $fetch(`/api/songs`);

        if (!songs) {
          return;
        }

        this.playlist = songs;
      } catch (error) {
        console.log(error);
      }
    },
    addSongToPlaylist() {
      //
    },
    removeSongFromPlaylist(id: string) {
      const filteredPlaylist = this.playlist.filter((song) => song.id !== id);

      this.playlist = filteredPlaylist;
    },
    clearPlaylist() {
      this.playlist = [];
    },
  },
  persistentState: {
    stateKey: "playlist",
  },
});
