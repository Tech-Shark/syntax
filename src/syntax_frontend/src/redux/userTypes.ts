import { User } from "../../../declarations/syntax_backend/syntax_backend.did";

export interface UserState {
  profile?: Partial<User>;
}

export interface UserUpdateProfilePayload extends UserState {}
