import {Board} from './board';
import {Filter} from './filter';

export interface BoardResponseResult {
  values: Array<Board>;
  filters: Array<Filter>;
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
