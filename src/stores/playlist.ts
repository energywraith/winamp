import { Playlist } from "@/types/playlist";
import { usePlayerStore } from "./player";
import { parseYoutubeId } from "~/utils/parseYoutubeId";
import type { Song } from "@/types/song";

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
      try {
        const song = await $fetch(`/api/song/${parseYoutubeId(id)}`);

        if (!song) {
          return;
        }

        this.playlist = [...this.playlist, song];
      } catch (error) {
        console.log(error);
      }
    },
    removeSongFromPlaylist(id: string) {
      const filteredPlaylist = this.playlist.filter((song) => song.id !== id);

      this.playlist = filteredPlaylist;
    },
    clearPlaylist() {
      this.playlist = [];
    },
  },
});
