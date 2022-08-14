<script setup lang="ts">
import IconButton from "@/components/IconButton.vue";

import previousIcon from "@/assets/control-buttons-previous.svg";
import playIcon from "@/assets/control-buttons-play.svg";
import pauseIcon from "@/assets/control-buttons-pause.svg";
import stopIcon from "@/assets/control-buttons-stop.svg";
import nextIcon from "@/assets/control-buttons-next.svg";
import openFileIcon from "@/assets/control-buttons-open-file.svg";
</script>

<template>
  <div class="control_buttons">
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="previousIcon"
      :width="23"
      :height="23"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="playIcon"
      :width="23"
      :height="23"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="pauseIcon"
      :width="23"
      :height="23"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="stopIcon"
      :width="23"
      :height="23"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="nextIcon"
      :width="23"
      :height="23"
    />
    <IconButton
      class="control_buttons__button control_buttons__button--open-file"
      withClassicBackground
      :icon="openFileIcon"
      :width="21"
      :height="23"
    />
  </div>
</template>

<style lang="scss" scoped>
.control_buttons {
  display: flex;
  align-items: center;

  &__button {
    &--open-file {
      margin-left: 5px;
    }
  }
}
</style>
