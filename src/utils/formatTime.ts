const formatToTwoDigits = (number: number) =>
  number < 10 ? `0${number}` : number;

export default (minutes: number, seconds: number) =>
  `${formatToTwoDigits(minutes)}:${formatToTwoDigits(seconds)}`;
