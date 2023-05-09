import { useState } from "react";
import {
  GiphyService,
  type IGiphyAPIResultData,
} from "~/services/GiphyService";

export const useGiphy = () => {
  const giphy = new GiphyService();
  const [gifs, setGifs] = useState<IGiphyAPIResultData[]>();

  const fetchGifs = async (inputTerm: string) => {
    const { data } = await giphy.search(inputTerm);

    setGifs(data);
  };

  return {
    gifs,
    fetchGifs,
  };
};
