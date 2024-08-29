import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const clientquery = new QueryClient();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={clientquery}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
