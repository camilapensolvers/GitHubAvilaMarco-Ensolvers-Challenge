import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ActionProvider } from './context/ActionContext.jsx';
import UseNotes from './hooks/UseNotes.jsx';
import { getNotesService } from './service/notes.js';
import ArchivedNotes from './views/ArchivedNotes.jsx';
import NoArchivedNotes from './views/NoArchivedNotes.jsx';
import { NotesProvider } from './context/NotesContext.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element:
      <NotesProvider>
        <ActionProvider>
          <App />
        </ActionProvider>
      </NotesProvider>
    ,
    loader: async () => {
      return await getNotesService();
    },
    children: [
      {
        path: "notes",
        element: <NoArchivedNotes />,
      },
      {
        path: "notes/archived",
        element: <ArchivedNotes />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
