<script setup lang="ts">
import { ref, inject, reactive } from "vue";
import useMarquee from "@/composables/marquee";
import WindowBase from "@/components/WindowBase.vue";
import ScreenBase from "@/components/ScreenBase.vue";
import PlayState from "@/components/PlayState.vue";
import type { PlayStates } from "@/types/playStates";
import type { Song } from "@/types/song";
import { themeKey } from "@/keys";
import getFullSongName from "@/utils/getFullSongName";

const theme = inject(themeKey);

const song: Song = reactive({
  duration: "3:05",
  author: "Linkin Park",
  name: "A Place for My Head",
});

const playState = ref<PlayStates>("pause");
const marqueeText = useMarquee(getFullSongName(song));
</script>

<template>
  <WindowBase name="Winamp" class="main_window">
    <div class="main_window__two_column">
      <ScreenBase
        class="main_window__two_column__left__screen_base"
        withRectanglesBackground
      >
        <template #sideLetters>0AIDV</template>
        <PlayState :state="playState" />
      </ScreenBase>
      <div class="main_window__two_column__right">
        <ScreenBase
          class="main_window__two_column__right__screen_base main_window__two_column__right__screen_base--width-full"
        >
          <div class="marquee_container">
            {{ marqueeText }}
          </div>
        </ScreenBase>
        <div style="display: flex; margin-top: 4px">
          <ScreenBase class="main_window__two_column__right__screen_base">
            192
          </ScreenBase>
          kbps
          <ScreenBase class="main_window__two_column__right__screen_base">
            44
          </ScreenBase>
          kHz
          <div>mono</div>
          <div>stereo</div>
        </div>
      </div>
    </div>
  </WindowBase>
</template>

<style lang="scss" scoped>
.main_window {
  display: flex;
  flex-direction: column;

  &__two_column {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);

    &__left__screen_base {
      width: 92px;
      padding: 2px;
      box-sizing: border-box;
    }

    &__right {
      margin-left: 4px;
      font-size: 9px;

      &__screen_base {
        color: v-bind("theme?.colors.winampGreen");
        height: 14px;
        padding: 0 2px;
        box-sizing: border-box;
        width: fit-content;
        font-family: "Retro";

        &--width-full {
          width: 100%;
        }

        .marquee_container {
          overflow: hidden;
          white-space: nowrap;
          user-select: none;
        }
      }
    }
  }
}
</style>
