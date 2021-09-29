export { default as InputAuth } from './Input/InputAuth';
export { default as SelectOption } from './Input/SelectOption';
export { default as InputSearch } from './Input/InputSearch';
export { default as InputSearch2 } from './Input/InputSearch2';
export { default as Dropdown } from './Dropdown/Dropdown';
export { default as DropdownItem } from './Dropdown/DropdownItem';
export { default as InputCount } from './InputCount/InputCount';
export { default as LayoutInput } from './Input/LayoutInput';
export { default as InputCheck } from './Input/InputCheck';
export { default as Input } from './Input/Input';
export { default as Loader } from './Loader/Loader';

export const buttonItemRender = (current, type, element) => {
  if (type === 'prev') {
    return <button type="button" className="border px-3" title="prev"></button>;
  }
  if (type === 'next') {
    return <button type="button" className="border px-3" title="next"></button>;
  }
  return element;
};

export const localePagination = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
};
