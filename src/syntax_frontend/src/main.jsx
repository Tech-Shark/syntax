import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Identity_2 from './views/Identity_2.jsx';
import Grammar from './views/Grammar/Grammar';
import BioData from './views/BioData/BioData.jsx';
import NewCv from './views/NewCV/NewCv.jsx';
import { AuthClient } from "@dfinity/auth-client";

// Define public routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Identity_2 />, // Authenticated page
  },
  {
    path: "/grammar",
    element: <Grammar />,
  },
  {
    path: "/biodata",
    element: <BioData />,
  },
  {
    path: "/new-cv",
    element: <NewCv />,
  },
]);

// Set default options for mainnet
const fiveDays = BigInt(5 * 24 * 60 * 60 * 1000000000); // 5 days in nanoseconds

export const defaultOptions = {
  createOptions: {
    idleOptions: {
      disableIdle: true,
    },
  },
  loginOptions: {
    identityProvider: "https://identity.ic0.app/#authorize",
    maxTimeToLive: fiveDays, // 5 days
  },
};

// Initialize the AuthClient and check for authentication
const init = async () => {
  try {
    console.log("Initializing AuthClient...");
    const authClient = await AuthClient.create();

    // Check if the user is authenticated
    if (await authClient.isAuthenticated()) {
      console.log("User is already authenticated.");
      handleAuth(authClient);
    } else {
      console.log("User is not authenticated, rendering landing page...");
      await authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: () => {
          handleAuth(authClient);
        }
      });
    }
  } catch (error) {
    console.error("Error initializing AuthClient:", error);
  }
};

// Render the app for authenticated users
async function handleAuth(authClient) {
  try {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error rendering app:", error);
  }
}

// Immediately invoke the initialization function
init();
