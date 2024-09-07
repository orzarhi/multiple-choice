import { useMemo, useReducer } from 'react';
import { filterFields } from '../constants';
import { FilterReducer, User } from '../types';
import usersData from '../data/users.json';

const initialFiltersReducer = filterFields.reduce(
  (acc, curr) => ({ ...acc, [curr.id]: false }),
  {} as Record<string, boolean>
);

const filterReducer: FilterReducer = (state, action) => {
  return { ...state, [action.id]: !state[action.id] };
};
export const Users = () => {
  const [filters, dispatch] = useReducer(filterReducer, initialFiltersReducer);

  const data = useMemo(() => {
    const results = filterFields
      .filter((field) => filters[field.id])
      .reduce((acc, curr) => curr.apply(acc), usersData);

    return results as unknown as User[];
  }, [filters]);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {filterFields.map((field) => (
          <label key={field.id}>
            <input
              type="checkbox"
              checked={filters[field.id]}
              onChange={() => dispatch({ id: field.id })}
            />
            {field.label}
          </label>
        ))}
      </div>
      {data.length ? (
        <ol>
          {data.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} ({user.isActive ? 'Active' : 'Inactive'}) -{' '}
              {user.isAdmin ? 'Admin' : 'User'}
            </li>
          ))}
        </ol>
      ) : (
        <h1>No users found</h1>
      )}
    </div>
  );
};
