<script setup lang="ts">
import { ref } from "vue";
import IconButton from "@/components/IconButton.vue";
import CheckboxInput from "@/components/Input/CheckboxInput.vue";

import previousIcon from "@/assets/control-buttons-previous.svg";
import playIcon from "@/assets/control-buttons-play.svg";
import pauseIcon from "@/assets/control-buttons-pause.svg";
import stopIcon from "@/assets/control-buttons-stop.svg";
import nextIcon from "@/assets/control-buttons-next.svg";
import openFileIcon from "@/assets/control-buttons-open-file.svg";
import toggleRepeatIcon from "@/assets/toggle-repeat-icon.svg";
import logoIcon from "@/assets/logo.png";

const shuffle = ref<boolean>(false);
const repeat = ref<boolean>(false);
</script>

<template>
  <div class="control_buttons">
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="previousIcon"
      :width="23"
      :height="19"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="playIcon"
      :width="23"
      :height="19"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="pauseIcon"
      :width="23"
      :height="19"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="stopIcon"
      :width="23"
      :height="19"
    />
    <IconButton
      class="control_buttons__button"
      withClassicBackground
      :icon="nextIcon"
      :width="23"
      :height="19"
    />
    <IconButton
      class="control_buttons__button control_buttons__button--open-file"
      withClassicBackground
      :icon="openFileIcon"
      :width="22"
      :height="17"
    />
    <CheckboxInput
      v-model="shuffle"
      name="shuffle"
      label="shuffle"
      class="control_buttons__button control_buttons__button--shuffle"
    />
    <CheckboxInput
      v-model="repeat"
      name="repeat"
      class="control_buttons__button control_buttons__button--repeat"
    >
      <img :src="toggleRepeatIcon" width="10" height="6" />
    </CheckboxInput>
    <a
      href="https://github.com/energywraith/winamp"
      target="_blank"
      class="control_buttons__anchor"
    >
      <img
        :src="logoIcon"
        width="24"
        height="22"
        class="control_buttons__anchor--about"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.control_buttons {
  display: flex;
  align-items: center;
  position: relative;

  &__button {
    &--open-file {
      margin-left: 5px;
    }

    &--shuffle {
      margin-left: 8px;
    }

    &--repeat {
      margin-left: 2px;
    }
  }

  &__anchor--about {
    position: absolute;
    right: -4px;
    bottom: -4px;
    opacity: 0.6;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
