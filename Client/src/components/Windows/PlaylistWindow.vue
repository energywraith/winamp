<script setup lang="ts">
import { reactive } from "vue";
import WindowBase from "@/components/WindowBase.vue";
import ScreenBase from "@/components/ScreenBase.vue";
import SongList from "@/components/SongList.vue";
import type { Playlist } from "@/types/playlist";

const playlist = reactive<Playlist>([
  {
    id: "1",
    duration: "3:04",
    author: "Linkin Park",
    name: "Papercut",
  },
  {
    id: "2",
    duration: "2:37",
    author: "Linkin Park",
    name: "One Step Closer",
  },
  {
    id: "3",
    duration: "3:23",
    author: "Linkin Park",
    name: "With You",
  },
  {
    id: "4",
    duration: "3:20",
    author: "Linkin Park",
    name: "Points of Authority",
  },
  {
    id: "5",
    duration: "3:28",
    author: "Linkin Park",
    name: "Crawling",
  },
  {
    id: "6",
    duration: "3:03",
    author: "Linkin Park",
    name: "Runaway",
  },
  {
    id: "7",
    duration: "3:09",
    author: "Linkin Park",
    name: "By Myself",
  },
  {
    id: "8",
    duration: "3:36",
    author: "Linkin Park",
    name: "In The End",
  },
  {
    id: "9",
    duration: "3:04",
    author: "Linkin Park",
    name: "A Place for My Head",
  },
  {
    id: "10",
    duration: "3:14",
    author: "Linkin Park",
    name: "Forgotten",
  },
  {
    id: "11",
    duration: "2:37",
    author: "Linkin Park",
    name: "Cure for the Itch",
  },
  {
    id: "12",
    duration: "3:11",
    author: "Linkin Park",
    name: "Pushing Me Away",
  },
  {
    id: "13",
    duration: "3:11",
    author: "Linkin Park",
    name: "Pushing Me Away",
  },
  {
    id: "14",
    duration: "3:11",
    author: "Linkin Park",
    name: "Pushing Me Away",
  },
]);
</script>

<template>
  <WindowBase name="Winamp Playlist" class="playlist_window">
    <PerfectScrollbar>
      <ScreenBase class="playlist_window__screen_base">
        <div class="playlist_window__song_list">
          <SongList :playlist="playlist" />
        </div>
      </ScreenBase>
    </PerfectScrollbar>
    <div class="playlist_window__buttons"></div>
  </WindowBase>
</template>

<style lang="scss">
.playlist_window {
  &__screen_base {
  }

  &__song_list {
    width: 100%;
  }

  &__buttons {
    margin-top: 10px;
    height: 10px;
    font-size: 10px;
  }
}

.ps {
  height: 160px;
}
</style>
