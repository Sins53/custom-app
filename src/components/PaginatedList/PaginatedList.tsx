import React from 'react';

export type VirtualizedListItemProp<TData = any> = React.ComponentType<{
  // individual item
  item: TData;
  // index of individual item
  index: number;
}>;
interface PaginationParamsProps {
  currentPage: number;
  rowPerPage: number;
  totalItem: number;
  gotoPage: (number: number) => void;
  getRow: (number: number) => void;
}
interface PaginatedListProps {
  loading: boolean;
  isSearch: boolean;
  data: any;
  paginationParams: PaginationParamsProps;
  component: any;
}

function PaginatedList(props: PaginatedListProps) {
  console.log(props, 'inside paginated list');
  const { component: Component } = props;
  console.log(Component);
  return <Component {...props} />;
}

export default PaginatedList;
