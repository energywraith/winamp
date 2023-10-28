<script setup lang="ts">
import { usePlaylistStore } from "@/stores/playlist";

const playlistStore = usePlaylistStore();

const showPlaylist = ref(playlistStore.isWindowOpen);

onMounted(() => {
  watch(showPlaylist, (value) => {
    playlistStore.setIsWindowOpen(value);
  });
});
</script>

<template>
  <InputCheckbox
    v-model="showPlaylist"
    name="playlist editor"
    label="pl"
    class="checkbox_input"
  />
</template>

<style lang="scss" scoped>
.checkbox_input {
  font-size: 6px;
  margin-top: 2px;
}
</style>
