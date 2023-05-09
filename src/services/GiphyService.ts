export interface IGiphyAPISearchResponse {
  data: IGiphyAPIResultData[];
}

export interface IGiphyAPIResultData {
  images: {
    downsized_small: string;
    fixed_width: string;
  };
}

export class GiphyService {
  private apiKey: string;
  private giphySearchEnpoint: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY as string;
    this.giphySearchEnpoint = "http://api.giphy.com/v1/gifs/search";
  }

  public async search(input: string) {
    const response = await fetch(
      this.giphySearchEnpoint + "?api_key=" + this.apiKey + "&q=" + input,
      {
        method: "GET",
      }
    );

    return (await response.json()) as IGiphyAPISearchResponse;
  }
}
