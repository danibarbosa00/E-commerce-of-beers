export interface User {
  id: number;
  token: string;
}

export interface LoadUserAction {
  type: 'LOAD_USER';
  payload: User;
}

export type UserPayload = User | null;

const initialState: UserPayload = null;

export default function user(state: UserPayload = initialState, action: LoadUserAction): UserPayload {
  switch (action.type) {
    case 'LOAD_USER':
      return action.payload;
    default:
      return state;
  }
}
