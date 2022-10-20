<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import type { Playlist } from "@/types/playlist";
import parseSecondsToMinutes from "@/utils/parseSecondsToMinutes";
import formatTime from "@/utils/formatTime";

interface Props {
  playlist: Playlist;
}

interface Emits {
  (e: "playSong", value: string): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const focusedSongId = ref<string | null>(null);

const setFocusedSongId = (songId: string | null) => {
  if (songId && songId === focusedSongId.value) {
    emit("playSong", songId);
  }

  focusedSongId.value = songId;
};

const onBlur = () => setFocusedSongId(null);
</script>

<template>
  <ol class="song_list" @click.self="onBlur">
    <li
      v-for="(song, index) in playlist"
      :class="[
        'song_list__song',
        { 'song_list__song--focused': song.id === focusedSongId },
      ]"
      :key="song.name"
      @click="() => setFocusedSongId(song.id)"
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
