export interface WeatherResponse {
  current: {
    temp_c: number
  }
}

export interface PostForm {
  title: string;
  content: string
}