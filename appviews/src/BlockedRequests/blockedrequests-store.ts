import type { ActionOf } from '../lib/store';
import { Store } from '../lib/store';

// begin codegen
export type Request = {
  id: UUID;
  time: ISODateString;
  target: string;
  protocol: 'tcp' | 'udp' | 'other';
  searchableText: string;
  app: string;
};

export type AppState = {
  windowOpen: boolean;
  selectedRequestIds: UUID[];
  requests: Request[];
  filterText: string;
  tcpOnly: boolean;
  createUnlockRequests:
    | { case: 'failed'; error: string }
    | { case: 'idle' }
    | { case: 'ongoing' }
    | { case: 'succeeded' };
};

export type AppEvent =
  | { case: 'filterTextUpdated'; text: string }
  | { case: 'unlockRequestSubmitted'; comment?: string }
  | { case: 'toggleRequestSelected'; id: UUID }
  | { case: 'requestFailedTryAgainClicked' }
  | { case: 'tcpOnlyToggled' }
  | { case: 'clearRequestsClicked' }
  | { case: 'closeWindow' };
// end codegen

export type ViewState = {
  unlockRequestExplanation: string;
};

export type ViewAction = { type: 'explanationUpdated'; text: string };

export type Action = ActionOf<AppState, AppEvent, ViewAction>;
export type State = AppState & ViewState;

export class BlockedRequestsStore extends Store<
  AppState,
  AppEvent,
  ViewState,
  ViewAction
> {
  appState(): AppState {
    return {
      windowOpen: true,
      filterText: ``,
      selectedRequestIds: [],
      requests: [],
      tcpOnly: true,
      createUnlockRequests: { case: `idle` },
    };
  }

  viewState(): ViewState {
    return {
      unlockRequestExplanation: ``,
    };
  }

  initializer(): State {
    return { ...this.appState(), ...this.viewState() };
  }

  reducer(state: State, action: Action): State {
    switch (action.type) {
      case `receivedUpdatedAppState`: {
        const reqSucceeded =
          state.createUnlockRequests.case === `ongoing` &&
          action.appState.createUnlockRequests.case === `succeeded`;
        return {
          ...state,
          ...action.appState,
          unlockRequestExplanation: reqSucceeded ? `` : state.unlockRequestExplanation,
        };
      }
      case `explanationUpdated`:
        return { ...state, unlockRequestExplanation: action.text };
      case `appEventEmitted`:
        return state;
    }
  }
}

export default new BlockedRequestsStore();
