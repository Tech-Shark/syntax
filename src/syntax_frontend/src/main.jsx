import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Identity_2 from './views/Identity_2.jsx';
import NewProject from './views/NewProject/NewProject';
import EditCV from './views/EditCV/EditCV';
import Grammar from './views/Grammar/Grammar';
import { AuthClient } from "@dfinity/auth-client";
import BioData from './views/BioData/BioData.jsx';
import NewCv from './views/NewCV/NewCv.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Identity_2 />,
  },
  {
    path: "/cv-enhancer",
    element: <NewProject />,
  },
  // {
  //   path: "/cv-enhancer",
  //   element: <EditCV />,
  // },
  {
    path: "/grammar",
    element: <Grammar />
  },
  {
    path: "/biodata",
    element: <BioData />
  },
  {
    path: "/new-cv",
    element: <NewCv />
  },
 
]);

// const init = async () => {
     
//         const authClient = await AuthClient.create();
//         if( await authClient.isAuthenticated()){
//           handleAuth(authClient);
//         }else{
//           await authClient.login({
//             identityProvider: "https://identity.ic0.app/#authorize",
//             onSuccess: () => {
//                 handleAuth(authClient);
//             }
//           })
//         }
        
// }

// async function handleAuth(authClient){
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
// }

// init();

