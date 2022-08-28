<script setup lang="ts">
import WindowBase from "@/components/WindowBase.vue";
import ScreenBase from "@/components/ScreenBase.vue";
import SongList from "@/components/SongList.vue";
import usePlayer from "@/composables/player";

const player = usePlayer();
</script>

<template>
  <WindowBase name="Winamp Playlist" class="playlist_window">
    <PerfectScrollbar>
      <ScreenBase class="playlist_window__screen_base">
        <div class="playlist_window__song_list">
          <SongList :playlist="player.state.playlist.value" />
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
