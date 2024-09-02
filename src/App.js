import './App.css';
import Workspace from './Workspace/Workspace';
import { ProfileProvider } from './ProfileContextProvider';

export default function App() {
  return (
    <ProfileProvider>
      <Workspace/>
    </ProfileProvider>
  );
}

