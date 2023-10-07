export type TopTypes = {
  mal_id:number;
  url:string;
  images:Image;
  title:string;
  titles:Title[];
  type:string;
  source:string;
  episode:number;
  status:string;
  duration:string;
  rating:string;
  score:number;
  rank:number;
  popularity:3;
  members:number;
  favorites:number;
  synopsis:string;
  season:string;
  year:string;
  producers:Producers[];
  studios:Studios[];
  genres: Genres[];
}

type Image={
  jpg:{
    image_url:string;
    smaill_image_url:string;
    large_image_url:string;
  };
  webp:{
    image_url:string;
    smaill_image_url:string;
    large_image_url:string;
  }
}

type Title = {
  type:string;
  title:string;
}
type Producers={
  mal_id:number;
  type:string;
  name:string;
  url:string;
}
type Studios = {
  mal_id: number;
  type:string;
  name:string;
  url:string;
}

type Genres = {
  mal_id:number;
  type:string;
  name:string;
  url:string;
}