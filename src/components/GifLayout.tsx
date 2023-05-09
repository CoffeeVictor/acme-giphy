import React from "react";
import { type IGiphyAPIResultData } from "~/services/GiphyService";

type GifLayoutProps = {
  gifs: IGiphyAPIResultData[];
};

export const GifLayout: React.FC<GifLayoutProps> = (props) => {
  const { gifs } = props;

  if (!gifs) return "Loading...";

  console.log("Gifs:", gifs);

  return (
    <div className="flex w-full flex-wrap">
      {gifs.map((gif, index) => {
        console.log("Src:", gif.images.fixed_width);

        return (
          <img src={gif.images.fixed_width.url} key={index} alt="placeholder" />
        );
      })}
    </div>
  );
};
