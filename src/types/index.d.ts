type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type Preferences = {
  theme: 'light' | 'dark';
  notifications: boolean;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  profilePicture: string;
  dateOfBirth: string;
  address: Address;
  phone: string;
  isAdmin: boolean;
  isActive: boolean;
  preferences: Preferences;
  createdAt: Date;
  updatedAt: Date;
};


type FilterState = Record<string, boolean>;

interface FilterAction {
  id: string;
}

type FilterReducer = (state: FilterState, action: FilterAction) => FilterState;