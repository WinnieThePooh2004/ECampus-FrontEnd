export class PaginationResponse<TData>{
  public constructor(public data: TData[] = [], public metadata: Metadata = new Metadata()) {
  }
}

export class Metadata{
  pageNumber: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;
}
