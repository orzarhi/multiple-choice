import { useMemo, useReducer, useState } from 'react';
import { filterFields } from '../constants';
import { FilterReducer, User } from '../types';
import usersData from '../data/users.json';

const initialFiltersReducer: Record<string, boolean> = filterFields.reduce(
  (acc, curr) => ({ ...acc, [curr.id]: false }),
  {}
);
const filterReducer: FilterReducer = (state, action) => {
  return { ...state, [action.id]: !state[action.id] };
};
export const Users = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [filters, dispatch] = useReducer(filterReducer, initialFiltersReducer);

  const searchForUser = (users: User[], searchInput: string) =>
    users.filter((user) =>
      user.firstName.toLowerCase().includes(searchInput.toLowerCase())
    );

  const data = useMemo(() => {
    let results = searchForUser(usersData, searchInput);

    results = filterFields
      .filter((field) => filters[field.id])
      .reduce((acc, curr) => curr.apply(acc), results);

    return results;
  }, [filters, searchInput]);

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
      <input
        type="text"
        placeholder="Search User..."
        value={searchInput}
        onChange={({ target }) => setSearchInput(target.value)}
      />
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
