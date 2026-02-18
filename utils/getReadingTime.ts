export const getReadingTime = (text: string) => {
  const WPM = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WPM);

  return minutes;
};
