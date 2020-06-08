import {Stance} from './stance';

export interface Spec {
  contactLength: number;
  sideCut: number;
  noseWidth: number;
  tailWidth: number;
  waistWidth: number;
  stance: Stance;
  flex: number;
  weightRange: number;
}
