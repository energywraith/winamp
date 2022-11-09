import { watch } from "vue";
import type { Ref } from "vue";

type Props = {
  value: Ref;
  emit?: (e: "update:modelValue", value: string) => void;
  callback: (value: string) => void;
};

export const useModelValueUpdateCallback = ({ value, emit, callback }: Props) => {
  watch(value, (newValue) => {
    if (emit) {
      emit("update:modelValue", newValue);
    }

    callback(newValue);
  });
};
