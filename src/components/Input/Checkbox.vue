<script setup lang="ts">
interface Props {
  modelValue: boolean;
  name: string;
  label?: string;
}

interface Emits {
  (e: "update:modelValue", value: boolean): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const onChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
};
</script>

<template>
  <div class="checkbox_container">
    <input
      type="checkbox"
      :name="name"
      :value="modelValue"
      :onchange="onChange"
    />
    <label :for="name" class="checkbox_label">
      <div class="checkbox_label__status" />
      <div class="checkbox_label__text">
        {{ label }}
        <slot />
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox_container {
  position: relative;
  height: 14px;
  font-size: 6px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #bdced6;
    box-shadow: inset -1px -1px 0px #4a5a6b, inset 1px 1px 0px #adb5c6,
      inset 2px 2px 0px #efffff, inset -1px -1px 0px #4a5a6b,
      inset -2px -2px 0px #7b8494;
  }

  &:active {
    & > * {
      top: 1px;
      left: 1px;
    }

    &::before {
      box-shadow: inset -1px -1px 0px black, inset 1px 1px 0px black,
        inset 2px 2px 0px #efffff, inset -1px -1px 0px #4a5a6b,
        inset -2px -2px 0px #7b8494;
      filter: brightness(0.7);
    }
  }

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &:checked + .checkbox_label {
      .checkbox_label__status {
        background: rgb(83, 200, 97);
      }
    }
  }

  .checkbox_label {
    width: 100%;
    height: 100%;
    position: relative;
    color: black;
    box-sizing: border-box;
    display: flex;
    padding: 0 4px;
    pointer-events: none;

    &__status {
      width: 5px;
      height: 4px;
      background: rgb(14, 83, 7);
      box-shadow: inset 1px 1px 0px #4a5a6b, inset -1px -1px 0px #adb5c6;
      margin-top: 3px;
    }

    &__text {
      align-self: center;
      text-transform: uppercase;
      font-family: "Pixelmix";
      font-weight: 700;
      letter-spacing: 0.3px;
      margin-left: 2px;
      margin-top: -2px;
    }
  }
}
</style>
