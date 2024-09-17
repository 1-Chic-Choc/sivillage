export interface CategoryType {
  ctg_name: string;
  ctg_no: string;
  depth: number;
  parent_ctg_name: string | null;
  parent_ctg_no: string | null;
  is_leaf: boolean;
}
