const getCourseDuration = (minutes: number): string => {
  const hh = Math.floor(minutes / 60);
  const mm = minutes % 60;
  const formattedHH = hh < 10 ? `0${hh}` : hh;
  const formattedMM = mm < 10 ? `0${mm}` : mm;
  const hourLabel = hh === 1 ? "hour" : "hours";
  return `${formattedHH}:${formattedMM} ${hourLabel}`;
};

export default getCourseDuration;
