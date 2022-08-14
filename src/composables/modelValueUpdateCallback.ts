import { watch } from "vue";
import type { Ref } from "vue";

type Props = {
  value: Ref;
  emit: (e: "update:modelValue", value: string) => void;
  callback: (value: string) => void;
};

const useModelValueUpdateCallback = ({ value, emit, callback }: Props) => {
  const onChange = (newValue: string) => {
    emit("update:modelValue", newValue);
  };

  watch(value, (newValue) => {
    onChange(newValue);
    callback(newValue);
  });
};

export default useModelValueUpdateCallback;
