import { ref, onMounted, onUnmounted, watch } from "vue";
import type { Ref } from "vue";

const addSeparator = (text: string) => `${text} *** `;

const useMarquee = (text: Ref<string>) => {
  const marqueeText = ref<string>(addSeparator(text.value));
  let timeoutRef: ReturnType<typeof setTimeout> | null = null;

  const moveTextByCharacter = () => {
    const firstCharacter = marqueeText.value.slice(0, 1);
    marqueeText.value = marqueeText.value.slice(1) + firstCharacter;
  };

  const startAnimation = () => {
    timeoutRef = setTimeout(() => {
      moveTextByCharacter();
      startAnimation();
    }, 200);
  };

  onMounted(() => {
    startAnimation();

    watch(text, (newText) => {
      marqueeText.value = addSeparator(newText);
    });
  });

  onUnmounted(() => {
    if (!timeoutRef) return;
    clearTimeout(timeoutRef);
  });

  return marqueeText;
};

export default useMarquee;
