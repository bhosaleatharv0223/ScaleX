import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { CaseStudies } from "./pages/CaseStudies";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Strategies } from "./pages/Strategies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "strategies", Component: Strategies },
      { path: "case-studies", Component: CaseStudies },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
