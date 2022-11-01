<script setup lang="ts">
import CheckboxInput from "@/components/Input/CheckboxInput.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

import toggleRepeatIcon from "@/assets/toggle-repeat-icon.svg";
import previousIcon from "@/assets/control-buttons-previous.svg";
import playIcon from "@/assets/control-buttons-play.svg";
import pauseIcon from "@/assets/control-buttons-pause.svg";
import stopIcon from "@/assets/control-buttons-stop.svg";
import nextIcon from "@/assets/control-buttons-next.svg";
import openFileIcon from "@/assets/control-buttons-open-file.svg";
import logoIcon from "@/assets/logo.png";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
</script>

<template>
  <div class="control_buttons">
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="previousIcon"
      :width="23"
      :height="19"
      @click="playerStore.previous()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="playIcon"
      :width="23"
      :height="19"
      @click="playerStore.resume()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="pauseIcon"
      :width="23"
      :height="19"
      @click="playerStore.pause()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="stopIcon"
      :width="23"
      :height="19"
      @click="playerStore.stop()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="nextIcon"
      :width="23"
      :height="19"
      @click="playerStore.skip()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button control_buttons__button--open-file"
      withClassicBackground
      :icon="openFileIcon"
      :width="22"
      :height="17"
    />
    <CheckboxInput
      v-model="playerStore.shuffleMode"
      name="shuffle"
      label="shuffle"
      class="control_buttons__button control_buttons__button--shuffle"
      @click="playerStore.toggleShuffleMode()"
    />
    <CheckboxInput
      v-model="playerStore.repeatMode"
      name="repeat"
      class="control_buttons__button control_buttons__button--repeat"
      @click="playerStore.toggleRepeatMode()"
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
