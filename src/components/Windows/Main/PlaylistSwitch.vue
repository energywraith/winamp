<script setup lang="ts">
const showPlaylist = ref(false);
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
