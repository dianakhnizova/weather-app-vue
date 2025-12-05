export interface WeatherResponse {
  current: {
    temp_c: number
  }
}

export interface PostForm {
  index: number;
  title: string;
  content: string
}