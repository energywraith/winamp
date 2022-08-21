<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { Playlist } from "@/types/playlist";

interface Props {
  playlist: Playlist;
}

defineProps<Props>();

const focusedSongId = ref<string | null>(null);

const setFocusedSongId = (songId: string) => {
  if (!songId) return;

  focusedSongId.value = songId;
};

// Probably there will be injected playSong method
const playSong = (songId: string) => {
  console.log(songId);
};
</script>

<template>
  <ol class="song_list">
    <li
      v-for="(song, index) in playlist"
      :class="[
        'song_list__song',
        { 'song_list__song--focused': song.id === focusedSongId },
      ]"
      :key="song.name"
      @click="() => setFocusedSongId(song.id)"
      @dblclick="() => playSong(song.id)"
    >
      <span>{{ index + 1 }}. </span>
      <span class="song_list__song__name">
        {{ song.name }}
      </span>
      <span class="song_list__song__duration">
        {{ song.duration }}
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
  padding: 4px 0;

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