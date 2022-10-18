import { Playlist } from "@/types/playlist";
import { defineStore } from "pinia";
import { mockPlaylist } from "@/mocks/playlist";

export const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    // playlist: [] as Playlist,
    playlist: mockPlaylist as Playlist,
  }),
  getters: {},
  actions: {},
});
