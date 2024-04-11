
import React from 'react';
import './App.css';
import { AnnouncementProvider } from './AddContext';
import AnnouncementList from './AddList';
import AddAnnouncementForm from './AddForm';



const App = () => {
  return (
    <AnnouncementProvider>
      <div>
        <AddAnnouncementForm />
        <AnnouncementList />
      </div>
    </AnnouncementProvider>
  );
};

export default App;
