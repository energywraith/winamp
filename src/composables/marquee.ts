import { ref, onMounted, onUnmounted } from "vue";

const addSeparator = (text: string) => `${text} *** `;

const useMarquee = (text: string) => {
  const marqueeText = ref<string>(addSeparator(text));
  let timeoutRef: number | null = null;

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
  });

  onUnmounted(() => {
    if (!timeoutRef) return;
    clearTimeout(timeoutRef);
  });

  return marqueeText;
};

export default useMarquee;
