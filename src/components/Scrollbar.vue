<template>
  <PerfectScrollbar v-if="appMounted"><slot /></PerfectScrollbar>
</template>

<script lang="ts" setup>
// The following error is eliminated by rendering after onMounted
// [Vue warn]: Component <Anonymous> is missing template or render function.
const appMounted = ref(false);

onMounted(() => {
  appMounted.value = true;
});
</script>

<style lang="scss" scoped></style>
