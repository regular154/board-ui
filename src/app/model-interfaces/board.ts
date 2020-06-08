import {Spec} from './spec';
import {Feature} from './feature';

export interface Board {
  id: string;
  year: number;
  name: string;
  code: string;
  size: string;
  spec: Spec;
  features: Array<Feature>;
  terrain: string;
  ridingLevel: string;
  bend: string;
  shape: string;
  details: string;
}
