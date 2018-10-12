import { IBubbleItem } from './../../../shared/charts/bubble/ibubble-item.model';

export interface IFunFactItem extends IBubbleItem {
  tags: string[];
  year?: number;
}
