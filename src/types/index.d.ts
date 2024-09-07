type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type Preferences = {
  theme: string;
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
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type FilterField = {
  id: string;
  label: string;
  apply: (data: User[]) => User[];
};

type FilterState = Record<string, boolean>;

type FilterAction = {
  id: string;
};

export type FilterReducer = (
  state: Record<string, boolean>,
  action: FilterAction
) => Record<string, boolean>;
