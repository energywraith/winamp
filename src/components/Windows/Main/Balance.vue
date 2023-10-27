<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();

const formValues = {
  balance: ref(playerStore.balance),
};

onMounted(() => {
  watch(
    () => playerStore.balance,
    (balance) => {
      formValues.balance.value = balance;
    }
  );
});
</script>

<template>
  <InputRange
    class="range_input"
    v-model="formValues.balance"
    @input="playerStore.setBalance"
    withColoredTrack
    withCustomChangeEvent
  />
</template>

<style lang="scss" scoped>
.range_input {
  margin-left: 6px;
  width: 38px;
}
</style>
