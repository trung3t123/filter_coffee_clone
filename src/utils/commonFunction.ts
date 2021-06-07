import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

declare module 'dayjs' {
  interface Dayjs {
    fromNow(): any;
  }
}

export const calculateTimeAgo = (time: string) => {
  return dayjs(time)?.fromNow();
};
