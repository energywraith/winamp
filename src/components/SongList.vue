<script setup lang="ts">
import { parseSecondsToMinutes } from "@/utils/parseSecondsToMinutes";
import { formatTime } from "@/utils/formatTime";
import { usePlaylistStore } from "~/stores/playlist";
import { usePlayerStore } from "../stores/player";

const playlistStore = usePlaylistStore();
const playerStore = usePlayerStore();

const selectedSongs = ref<string[]>([]);

const playSong = (id: string) => {
  playerStore.setCurrentSongIndex(playlistStore.getSongIndex(id));
  playerStore.resume();
};

const setFocusedSongs = (songId: string, withCtrl?: boolean) => {
  if (withCtrl) {
    if (selectedSongs.value.includes(songId)) {
      selectedSongs.value = selectedSongs.value.filter((id) => id !== songId);
      return;
    }

    selectedSongs.value = [...selectedSongs.value, songId];
    return;
  }

  selectedSongs.value = [songId];
};

const selectAll = () => {
  selectedSongs.value = playlistStore.playlist.map((song) => song.id);
};

const selectNone = () => {
  selectedSongs.value = [];
};

const invertSelect = () => {
  selectedSongs.value = playlistStore.playlist.reduce((acc: string[], song) => {
    if (selectedSongs.value.includes(song.id)) {
      return acc;
    }

    return [...acc, song.id];
  }, []);
};

const onBlur = () => {
  selectedSongs.value = [];
};

defineExpose({
  selectedSongs,
  selectAll,
  selectNone,
  invertSelect,
});
</script>

<template>
  <ol class="song_list" @click.self="onBlur">
    <li
      v-for="(song, index) in playlistStore.playlist"
      :class="[
        'song_list__song',
        { 'song_list__song--focused': selectedSongs.includes(song.id) },
      ]"
      :key="song.name"
      @click="() => setFocusedSongs(song.id)"
      @dblclick="() => playSong(song.id)"
      @click.ctrl="() => setFocusedSongs(song.id, true)"
      @contextmenu.prevent="() => setFocusedSongs(song.id, true)"
    >
      <span>{{ index + 1 }}. </span>
      <span class="song_list__song__name">
        {{ song.name }}
      </span>
      <span class="song_list__song__duration">
        {{ formatTime(parseSecondsToMinutes(+song.durationInSeconds)) }}
      </span>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
.song_list {
  color: rgb(0, 239, 0);
  font-family: "Tahoma";
  font-size: 10px;
  line-height: 13px;
  list-style: none;
  width: 100%;
  height: 100%;
  flex: 1;

  &__song {
    display: flex;
    padding: 0 4px;

    &--focused {
      background: blue;
    }

    &__name {
      margin-left: 1ch;
      flex-grow: 1;
      letter-spacing: 0.7px;
    }
  }
}
</style>
