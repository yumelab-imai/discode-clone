import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import { RootState } from './app/store';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { auth } from './firebase';
import { login } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from './components/ErrorFallBack';

function App() {
  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();

  console.log("user");
  console.log(user);

  React.useEffect(() => {
    auth.onAuthStateChanged((loggedUser: any) => {
      if (loggedUser) {
        dispatch(
          login({
            uid: loggedUser.uid,
            photoURL: loggedUser.photoURL,
            displayName: loggedUser.displayName,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <Sidebar />
            <Chat />
          </ErrorBoundary>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
