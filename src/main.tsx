import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

export function renderApp() {
  const rootElement = document.getElementById("root")
  if (!rootElement) {
    console.error("Root element not found in the DOM.")
    return
  }

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

// Execute the rendering logic
renderApp()
