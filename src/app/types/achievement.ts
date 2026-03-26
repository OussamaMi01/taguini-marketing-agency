export interface AchievementType {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  tags: string[];
  results: Array<{
    value: string;
    label: string;
  }>;
}

export interface CarouselControls {
  currentIndex: number;
  direction: number;
  isAutoPlaying: boolean;
  itemsPerView: number;
}