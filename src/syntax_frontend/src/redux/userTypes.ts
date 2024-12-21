export interface UserState {
  id?: string | null;
  credit?: number;
}

export interface UserUpdateProfilePayload extends UserState {}
