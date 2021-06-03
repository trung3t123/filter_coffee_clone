export const timeUnitsBetween = (startDate: any, endDate: any) => {
  let delta = Math.abs(endDate - startDate) / 1000;
  const isNegative = startDate > endDate ? -1 : 1;
  return [
    ['d', 24 * 60 * 60],
    ['h', 60 * 60],
    ['m', 60],
    // ['seconds', 1],
  ].reduce(
    (acc: { [key: string]: number }, [key, value]) => (
      (acc[key] = Math.floor(delta / value) * isNegative),
      (delta -= acc[key] * isNegative * value),
      acc
    ),
    {},
  );
};

export const calculateTimeAgo = (time: string) => {
  const unitTimeBetween: {
    [key: string]: number;
  } = timeUnitsBetween(new Date(time), new Date());

  let timeAgo = '';
  for (const property in unitTimeBetween) {
    if (unitTimeBetween[property] > 0) {
      timeAgo = `${unitTimeBetween[property]}${property} ago`;
      return timeAgo;
    }
  }
};
