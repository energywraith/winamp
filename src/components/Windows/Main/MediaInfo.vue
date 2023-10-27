<script setup lang="ts">
const kbps = ref(192);
const kHz = ref(44);
</script>

<template>
  <div class="media_info_group">
    <ScreenBase class="screen_base">
      {{ kbps }}
    </ScreenBase>
    <div class="media_info_name">kbps</div>
    <ScreenBase class="screen_base">
      {{ kHz }}
    </ScreenBase>
    <div class="media_info_name">kHz</div>
    <WindowsMainMonoStereo class="media_info_sound_type" value="stereo" />
  </div>
</template>

<style lang="scss" scoped>
.media_info_group {
  display: flex;
  margin-top: 4px;
  font-size: 8px;
  align-items: center;
  font-family: "Pixelmix";

  .media_info_name {
    align-self: center;
    color: white;
    margin-left: 4px;
    margin-right: 6px;
    font-size: 6px;
  }

  .media_info_sound_type {
    margin-left: auto;
  }

  .screen_base {
    width: fit-content;
    height: 11px;
    font-size: 7px;
    display: flex;
    align-items: center;
    filter: contrast(1);
  }
}
</style>
