<script setup lang="ts">
interface Props {
  value: "mono" | "stereo";
}

defineProps<Props>();
</script>

<template>
  <div class="mono_stereo">
    <div
      :class="[
        'mono_stereo__mono',
        { 'mono_stereo--highlight': value === 'mono' },
      ]"
    >
      mono
    </div>
    <div
      :class="[
        'mono_stereo__stereo',
        { 'mono_stereo--highlight': value === 'stereo' },
      ]"
    >
      stereo
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mono_stereo {
  display: flex;
  color: rgb(173, 173, 185);
  font-size: 6px;

  &--highlight {
    text-shadow: 0px 1px 8px #0adc0f, 0px 0px 8px #0adc0f;
    color: #00fa00;
  }

  &__stereo {
    margin-left: 6px;
  }
}
</style>
