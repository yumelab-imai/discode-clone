export interface InitialState {
  displayName: string;
  photoURL: string | undefined;
  user: null | {
    uid: string;
    photoURL: string;
    email: string;
    displayName: string;
  };
}

export interface InitialAppState {
  channelId: string | null;
  channelName: string | null;
}
