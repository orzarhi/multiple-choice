import { User } from '../types';

export const filterFields = [
  {
    id: 'filterActive',
    label: 'Active',
    apply(data: User[]) {
      return data.filter((item) => item.isActive);
    },
  },
  {
    id: 'filterAdmin',
    label: 'Admin',
    apply(data: User[]) {
      return data.filter((item) => item.isAdmin);
    },
  },
];
