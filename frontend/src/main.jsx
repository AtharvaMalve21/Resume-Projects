import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "./context/AppContext.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
      <ToastContainer />
    </BrowserRouter>
  </ClerkProvider>
);
