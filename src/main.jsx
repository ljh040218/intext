import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SavedPromptsProvider } from './components/Save/SavedPromptsContext'
import Home from './page'
import { Screen } from './components/Login/Login'
import SavedPromptsScreen from './components/Save/SavedPromptsScreen'
import UserProfile from './components/User/UserProfile';
import ProfileEditScreen from './components/Usersettings/ProfileEditScreen';
import CategorySearch from './components/Search/CategorySearch';
import SettingsPage from './components/Settings/SettingsPage';
import InputDesign from './components/Searching/InputDesign';
import PromptDetail from './components/Prompt/InputDesign'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SavedPromptsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Screen />} />
          <Route path="/search" element={<CategorySearch />} />
          <Route path="/saved" element={<SavedPromptsScreen />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<ProfileEditScreen />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/inputdesign" element={<InputDesign />} />
          <Route path="/prompt/:id" element={<PromptDetail />} />
        </Routes>
      </BrowserRouter>
    </SavedPromptsProvider>
  </React.StrictMode>,
)