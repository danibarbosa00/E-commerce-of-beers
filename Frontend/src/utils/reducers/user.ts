export interface User {
  id: number;
  token:number
}

export interface LoadUserAction {
  type: 'LOAD_USER';
  payload: User
}

export type UserPayload = User | null;

export default function user(state: UserPayload|null, action: LoadUserAction): UserPayload {
  switch (action.type) {
    case 'LOAD_USER':
      return action.payload;
    default:
      return state;
  }
}
