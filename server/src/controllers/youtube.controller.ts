import { Router } from 'express';
import type { videoFormat } from 'ytdl-core';
import * as youtubeService from '../services/youtube.service';

const controller = Router();

controller.get('/audioURL/:id', async (request, response) => {
  const songId = encodeURI(request.params.id);
  const audio = (await youtubeService.getAudioFromId(songId)) as videoFormat;

  try {
    response.json({ data: audio });
  } catch (error) {
    console.log(error);
  }
});

export default controller;
