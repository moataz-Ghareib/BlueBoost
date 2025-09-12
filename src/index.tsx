/**
 * Main application entry point for BlueBoost gaming platform
 * 
 * This file serves as the root entry point that:
 * - Creates the React root element
 * - Enables React Strict Mode for development checks
 * - Renders the main App component into the DOM
 * 
 * The application uses React 18's createRoot API for concurrent features
 * and wraps the app in StrictMode for enhanced development experience.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// Create React root and render the application
// StrictMode helps identify potential problems in development
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
