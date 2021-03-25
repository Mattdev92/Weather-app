export interface Details {
  pressure?: number;
  rain?: number;
  sunrise?: number;
  sunset?: number;
  temp?: {
    day?: number;
    max?: number;
    min?: number;
  };
  weather?: [
    {
      description?: string;
      main?: string;
    }
  ];
}
export interface OwnProps {
  day?: string;
  details?: Details;
}
