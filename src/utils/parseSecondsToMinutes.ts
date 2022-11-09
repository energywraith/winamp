export const parseSecondsToMinutes = (currentTime: number) => ({
  minutes: Math.floor(currentTime / 60),
  seconds: Math.floor(currentTime % 60),
});
