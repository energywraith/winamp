<script setup lang="ts">
const showEqualizer = ref(false);
</script>

<template>
  <InputCheckbox
    v-model="showEqualizer"
    name="equalizer"
    label="eq"
    class="checkbox_input checkbox_input--equalizer"
  />
</template>

<style lang="scss" scoped>
.checkbox_input {
  font-size: 6px;
  margin-top: 2px;
  margin-left: 4px;
}
</style>
