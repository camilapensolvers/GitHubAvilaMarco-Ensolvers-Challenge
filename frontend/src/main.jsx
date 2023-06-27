import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ActionsProvider } from './context/ActionsContext.jsx';
import App from './App.jsx'
import ArchivedNotes from './views/ArchivedNotes.jsx';
import { FiltersProvider } from './context/FiltersContext.jsx';
import NoArchivedNotes from './views/NoArchivedNotes.jsx';
import { NotesProvider } from './context/NotesContext.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { getNotesService } from './service/notes.js';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <NotesProvider>
        <FiltersProvider>
          <ActionsProvider>

            <App />

          </ActionsProvider>
        </FiltersProvider>
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
