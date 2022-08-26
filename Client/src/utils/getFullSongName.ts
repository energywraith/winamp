import type { Song } from "@/types/song";

export default ({ author, name, duration }: Song) =>
  `${author} (${duration}) - ${name}`;
