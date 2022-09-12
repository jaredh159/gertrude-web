import { State } from '../store';
import { initialState as authInitialState } from '../slice-auth';
import { initialState as usersInitialState } from '../slice-users';
import { initialState as menuInitialState } from '../slice-menu';
import { initialState as waitlistInitialState } from '../slice-waitlist';
import { initialState as adminInitialState } from '../slice-admin';
import { initialState as keychainsInitialState } from '../slice-keychains';
import { initialState as urlInitialState } from '../slice-url';

export function makeState(mutator: (state: State) => unknown = () => {}): State {
  const state: State = {
    auth: authInitialState(),
    admin: adminInitialState(),
    keychains: keychainsInitialState(),
    menu: menuInitialState(),
    waitlist: waitlistInitialState(),
    users: usersInitialState(),
    url: urlInitialState(),
  };
  mutator(state);
  return state;
}

export function makeGetState(mutator: (state: State) => unknown = () => {}): () => State {
  return () => makeState(mutator);
}

export function nextTick(): Promise<unknown> {
  return new Promise<unknown>(setImmediate);
}
