<script setup lang="ts">
import previousSVG from "~/assets/control-buttons-previous.svg";
import playSVG from "~/assets/control-buttons-play.svg";
import pauseSVG from "~/assets/control-buttons-pause.svg";
import stopSVG from "~/assets/control-buttons-stop.svg";
import nextSVG from "~/assets/control-buttons-next.svg";
import openFileSVG from "~/assets/control-buttons-open-file.svg";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
</script>

<template>
  <div class="control_buttons">
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="previousSVG"
      :width="23"
      :height="19"
      @click="playerStore.previous()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="playSVG"
      :width="23"
      :height="19"
      @click="playerStore.resume()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="pauseSVG"
      :width="23"
      :height="19"
      @click="playerStore.pause()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="stopSVG"
      :width="23"
      :height="19"
      @click="playerStore.stop()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button"
      withClassicBackground
      :icon="nextSVG"
      :width="23"
      :height="19"
      @click="playerStore.skip()"
    />
    <ButtonComponent
      type="icon"
      class="control_buttons__button control_buttons__button--open-file"
      withClassicBackground
      :icon="openFileSVG"
      :width="22"
      :height="17"
    />
    <InputCheckbox
      v-model="playerStore.shuffleMode"
      name="shuffle"
      label="shuffle"
      class="control_buttons__button control_buttons__button--shuffle"
      @click="playerStore.toggleShuffleMode()"
    />
    <InputCheckbox
      v-model="playerStore.repeatMode"
      name="repeat"
      class="control_buttons__button control_buttons__button--repeat"
      @click="playerStore.toggleRepeatMode()"
    >
      <img src="~/assets/toggle-repeat-icon.svg" width="10" height="6" />
    </InputCheckbox>
    <a
      href="https://github.com/energywraith/winamp"
      target="_blank"
      class="control_buttons__anchor"
    >
      <img
        src="~/assets/logo.png"
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
