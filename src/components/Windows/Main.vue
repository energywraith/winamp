<script setup lang="ts">
import type { Song } from "@/types/song";

import { usePlayerStore } from "@/stores/player";
import { usePlaylistStore } from "@/stores/playlist";

import { parseSecondsToMinutes } from "@/utils/parseSecondsToMinutes";
import { formatTime } from "@/utils/formatTime";
import { getFullSongName } from "@/utils/getFullSongName";
import { getPageTitle } from "~/utils/getPageTitle";

const playerStore = usePlayerStore();
const playlistStore = usePlaylistStore();

const appConfig = useAppConfig();
const theme = appConfig.theme;

const fullSongName = ref("");
const marqueeText = useMarquee(fullSongName);

const minutes = ref(0);
const seconds = ref(0);
const kbps = ref(192);
const kHz = ref(44);

const formValues = {
  volume: ref(playerStore.volume),
  balance: ref(playerStore.balance),
  seeking: ref("0"),
};

const showEqualizer = ref(false);
const showPlaylist = ref(false);

const updateSongName = (song: Song | null) => {
  fullSongName.value = getFullSongName(song);
};

onMounted(() => {
  watch(
    () =>
      [playerStore.isPlaying, playlistStore.getCurrentSongDetails] as [
        boolean,
        Song | null
      ],
    ([isPlaying, currentSong]) => {
      useHead({
        title: getPageTitle(isPlaying ? currentSong?.name : undefined),
      });
    }
  );

  watch(
    () => playerStore.seeking,
    (seeking) => {
      formValues.seeking.value = seeking;

      const parsedTime = parseSecondsToMinutes(parseInt(seeking));

      minutes.value = parsedTime.minutes;
      seconds.value = parsedTime.seconds;
    }
  );

  watch(
    () => playerStore.volume,
    (volume) => {
      formValues.volume.value = volume;
    }
  );

  watch(
    () => playerStore.balance,
    (balance) => {
      formValues.balance.value = balance;
    }
  );

  if (playlistStore.getCurrentSongDetails) {
    updateSongName(playlistStore.getCurrentSongDetails);
  }

  watch(
    () => playlistStore.getCurrentSongDetails,
    (currentSong) => {
      updateSongName(currentSong);
    }
  );
});

const onSeekingEnd = () => {
  if (playerStore.resumeOnSeekingEnd) {
    playerStore.resume();
    playerStore.resumeOnSeekingEnd = undefined;
  }
};
</script>

<template>
  <WindowBase name="Winamp" class="main_window">
    <div class="main_window__two_column">
      <ScreenBase
        class="screen_base screen_base--status"
        withRectanglesBackground
      >
        <template #sideLetters>0AIDV</template>
        <div class="screen_base__content">
          <PlayState :state="playerStore.playState" />
          <div class="screen_base__content__timer">
            {{ formatTime({ minutes, seconds }) }}
          </div>
          <SoundVisualizer class="screen_base__content__visualizer" />
        </div>
      </ScreenBase>
      <div class="main_window__two_column__right">
        <ScreenBase class="screen_base screen_base--song-title">
          <div class="marquee">
            {{ marqueeText }}
          </div>
        </ScreenBase>
        <div class="media_info_group">
          <ScreenBase class="screen_base screen_base--media-info">
            {{ kbps }}
          </ScreenBase>
          <div class="media_info_name">kbps</div>
          <ScreenBase class="screen_base screen_base--media-info">
            {{ kHz }}
          </ScreenBase>
          <div class="media_info_name">kHz</div>
          <MonoStereo class="media_info_sound_type" value="stereo" />
        </div>
        <div class="main_window__row">
          <InputRange
            class="range_input range_input--volume"
            v-model="formValues.volume"
            @input="playerStore.setVolume"
            withColoredTrack
            withCustomChangeEvent
          />
          <InputRange
            class="range_input range_input--balance"
            v-model="formValues.balance"
            @input="playerStore.setBalance"
            withColoredTrack
            withCustomChangeEvent
          />
          <InputCheckbox
            v-model="showEqualizer"
            name="equalizer"
            label="eq"
            class="checkbox_input checkbox_input--equalizer"
          />
          <InputCheckbox
            v-model="showPlaylist"
            name="playlist editor"
            label="pl"
            class="checkbox_input"
          />
        </div>
      </div>
    </div>
    <InputRange
      class="range_input range_input--seeking"
      v-model="formValues.seeking"
      @input="playerStore.setPlayingTime"
      @change="onSeekingEnd"
      :max="playlistStore.getCurrentSongDetails?.durationInSeconds"
      withGoldenThumb
      withCustomChangeEvent
    />
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

    .screen_base {
      &__content {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto 1fr;
        flex-grow: 1;
        color: white;

        &__timer {
          color: #00fa00;
          font-family: "PostPixel";
          margin-left: auto;
          margin-top: auto;
          font-size: 14px;
          letter-spacing: 1px;
        }

        &__visualizer {
          grid-column: 1/3;
          grid-row: 2;
        }
      }

      &--status {
        width: 88px;
        height: 42px;
        padding: 2px;
        box-sizing: border-box;
      }
    }

    &__right {
      margin-left: 4px;
      font-size: 9px;

      .screen_base {
        color: v-bind("theme?.colors.winampGreen");
        box-sizing: border-box;
        font-family: "Pixelmix";
        font-size: 7px;
        text-transform: uppercase;
        padding: 0 2px;

        &--song-title {
          height: 14px;
          width: 100%;
          letter-spacing: 0.7px;
          filter: contrast(1);

          .marquee {
            margin-top: 2px;
            overflow: hidden;
            white-space: nowrap;
            user-select: none;
          }
        }

        &--media-info {
          width: fit-content;
          height: 11px;
          font-size: 7px;
          display: flex;
          align-items: center;
          filter: contrast(1);
        }
      }

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
      }
    }
  }

  .range_input {
    &--volume {
      width: 58px;
    }
    &--balance {
      margin-left: 6px;
      width: 38px;
    }
    &--seeking {
      width: 99%;
      grid-column: 1/3;
      margin-top: 10px;
    }
  }

  .checkbox_input {
    font-size: 6px;
    margin-top: 2px;

    &--equalizer {
      margin-left: 4px;
    }
  }

  &__buttons {
    margin-top: 4px;
  }

  &__row {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
}
</style>
