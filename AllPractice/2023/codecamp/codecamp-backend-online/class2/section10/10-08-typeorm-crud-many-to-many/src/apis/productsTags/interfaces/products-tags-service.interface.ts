export interface IProductsTagsServiceFindByNames {
  tagNames: string[];
}

export interface IProductsTagsServiceBulkInsert {
  names: {
    name: string;
  }[];
}

export interface IProductsTagsServiceInsertTags {
  productTags: string[];
}
