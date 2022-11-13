<script setup lang="ts">
import type { VNodeRef } from "vue";
import { usePlayerStore } from "@/stores/player";
import { usePlaylistStore } from "@/stores/playlist";
import { Song } from "~/types/song";

const appConfig = useAppConfig();
const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();

const audioRef = ref<VNodeRef | null>(null);
const audioURL = ref("");

const playSong = (newSong: Song | null) => {
  if (!newSong) {
    audioURL.value = "";
    return;
  }

  audioURL.value = newSong?.playbackURL || "";

  if (audioRef.value) {
    audioRef.value.load();
  }
};

onMounted(() => {
  playerStore.setPlayerRef(audioRef);

  if (!playlistStore.getCurrentSongDetails && appConfig.startPlaylist) {
    appConfig.startPlaylist.forEach((songURL: string) => {
      playlistStore.addSongToPlaylist(songURL);
    });
  }

  if (playlistStore.getCurrentSongDetails) {
    playSong(playlistStore.getCurrentSongDetails);
  }

  watch(
    () => playlistStore.getCurrentSongDetails,
    (song) => {
      if (!song) {
        playerStore.stop();
      }

      playSong(song);
    }
  );

  watch(
    () => playerStore.isPlaying,
    (isPlaying) => {
      if (!audioRef.value) return;

      if (isPlaying) {
        audioRef.value.play();
        return;
      }

      audioRef.value.pause();
    }
  );

  watch(
    () => playerStore.getVolume,
    (volume) => {
      if (!audioRef.value) return;

      audioRef.value.volume = volume;
    }
  );
});

const timeUpdate = (event: Event) =>
  playerStore.setSeeking((event.target as HTMLAudioElement).currentTime);

const onDataLoaded = () => {
  if (playerStore.isPlaying) {
    audioRef.value.play();
    return;
  }

  audioRef.value.pause();
};
</script>

<template>
  <audio
    v-if="audioURL"
    ref="audioRef"
    @timeupdate="timeUpdate"
    @ended="playerStore.skip"
    @loadeddata="onDataLoaded"
  >
    <source :src="audioURL" />
  </audio>
</template>

<style lang="scss" scoped></style>
