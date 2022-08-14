<script setup lang="ts">
import { ref, inject, reactive } from "vue";
import useMarquee from "@/composables/marquee";
import WindowBase from "@/components/WindowBase.vue";
import ScreenBase from "@/components/ScreenBase.vue";
import PlayState from "@/components/PlayState.vue";
import RangeInput from "@/components/Input/RangeInput.vue";
import ControlButtons from "@/components/ControlButtons.vue";
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

const volume = ref<string>("0");
const balance = ref<string>("0");
const seeking = ref<string>("0");
</script>

<template>
  <WindowBase name="Winamp" class="main_window">
    <div class="main_window__two_column">
      <ScreenBase
        class="screen_base screen_base--status"
        withRectanglesBackground
      >
        <template #sideLetters>0AIDV</template>
        <PlayState :state="playState" />
      </ScreenBase>
      <div class="main_window__two_column__right">
        <ScreenBase class="screen_base screen_base--song-title">
          <div class="marquee">
            {{ marqueeText }}
          </div>
        </ScreenBase>
        <div class="media_info_group">
          <ScreenBase class="screen_base screen_base--media-info">
            192
          </ScreenBase>
          <div class="media_info_name">kbps</div>
          <ScreenBase class="screen_base screen_base--media-info">
            44
          </ScreenBase>
          <div class="media_info_name">kHz</div>
          <!-- <div>mono</div>
          <div>stereo</div> -->
        </div>
        <RangeInput
          class="range_input range_input--volume"
          v-model="volume"
          withColoredTrack
        />
        <RangeInput
          class="range_input range_input--balance"
          v-model="balance"
          withColoredTrack
        />
      </div>
      <RangeInput
        class="range_input range_input--seeking"
        v-model="seeking"
        withGoldenThumb
      />
    </div>
    <ControlButtons class="main_window__buttons" />
  </WindowBase>
</template>

<style lang="scss" scoped>
.main_window {
  display: flex;
  flex-direction: column;

  &__two_column {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);

    .screen_base--status {
      width: 92px;
      height: 42px;
      padding: 2px;
      box-sizing: border-box;
    }

    &__right {
      margin-left: 4px;
      font-size: 9px;

      .screen_base {
        color: v-bind("theme?.colors.winampGreen");
        padding: 0 2px;
        box-sizing: border-box;
        font-family: "Retro";

        &--song-title {
          height: 14px;
          width: 100%;

          .marquee {
            overflow: hidden;
            white-space: nowrap;
            user-select: none;
          }
        }

        &--media-info {
          width: fit-content;
          height: 10px;
        }
      }

      .media_info_group {
        display: flex;
        margin-top: 4px;
        font-size: 8px;

        .media_info_name {
          align-self: center;
          color: white;
          margin-left: 4px;
          margin-right: 6px;
          font-size: 7px;
          font-family: arial;
        }
      }
    }

    .range_input {
      &--volume {
        margin-top: 10px;
        width: 63px;
      }
      &--balance {
        margin-top: 10px;
        margin-left: 6px;
        width: 38px;
      }
      &--seeking {
        width: 99%;
        grid-column: 1/3;
        margin-top: 5px;
      }
    }
  }

  &__buttons {
    margin-top: 6px;
  }
}
</style>
