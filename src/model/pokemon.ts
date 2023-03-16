export interface Pokemon {
  id: number;
  name: string;
  frontSprite: string;
  types: string[];
  stats: { name: string; value: number }[];
}
