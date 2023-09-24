import { google } from "googleapis";
import { Song } from "~~/src/types/song";
import { sortByKey } from "~~/src/utils/sortByKey";

export default defineEventHandler(async (event) => {
  if (
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_PROJECT_ID ||
    !process.env.GOOGLE_CLIENT_ID ||
    !process.env.GOOGLE_CLIENT_EMAIL
  ) {
    console.log("Fill env");
    return [];
  }

  const auth = new google.auth.GoogleAuth({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: [process.env.GOOGLE_SCOPE || ""],
  });
  const service = google.drive({ version: "v3", auth });

  try {
    const res = await service.files.list({
      fields: "files(id, name, webContentLink)",
      q: "mimeType='audio/mpeg'",
    });

    if (!res.data.files) {
      return [];
    }

    const songs = Array.from(res.data.files);

    // @ts-ignore
    const parsedSongs = songs.reduce((acc, song) => {
      if (!song.name) {
        return acc;
      }

      const [order, author, name, durationInSeconds] = song.name.split(";");

      if (!author || !name || !durationInSeconds) {
        return acc;
      }

      return [
        ...acc,
        {
          id: song.id,
          order: +order,
          author,
          name,
          durationInSeconds,
          playbackURL: song.webContentLink,
        },
      ];
    }, []) as Song[];

    const orderedSongs = sortByKey(parsedSongs, "order");

    return orderedSongs;
  } catch (err) {
    throw err;
  }
});
