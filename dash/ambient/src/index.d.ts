type UUID = string;
type EmailAddress = string;
type ISODateString = string;

type Editable<T extends { id: UUID }> = {
  isNew?: boolean;
  original: Readonly<T>;
  draft: T;
};

type RequestState<T = void, E = ApiError> =
  | { state: 'idle' }
  | { state: 'ongoing' }
  | { state: 'failed'; error?: E }
  | { state: 'succeeded'; payload: T };

type ActionableApiError = {
  type: 'actionable';
  message?: string;
};

type ApiError =
  | { type: 'auth_failed' }
  | { type: 'no_internet' }
  | { type: 'not_found' }
  | ActionableApiError
  | { type: 'non_actionable'; rawErrors?: string[] };
