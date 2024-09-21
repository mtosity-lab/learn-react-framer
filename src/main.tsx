import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WhileInView } from "./pages/tom/WhileInView";
import { Layout } from "./pages/tom/Layout";
import { UseInView } from "./pages/tom/UseInView";
import { UseScroll } from "./pages/tom/UseScroll";
import { UseScrollAdvanced } from "./pages/tom/UseScrollAdvanced";
import { UseScrollWithContainer } from "./pages/tom/UseScrollWithContainer";
import { RevealLinks } from "./pages/tom/RevealLinks";
import { SlideTabs } from "./pages/tom/SlideTabs";

const router = createBrowserRouter([
  {
    path: "/tom",
    element: <Layout />,
    children: [
      {
        path: "while-in-view",
        element: <WhileInView />,
      },
      {
        path: "use-in-view",
        element: <UseInView />,
      },
      {
        path: "use-scroll",
        element: <UseScroll />,
      },
      {
        path: "use-scroll-advanced",
        element: <UseScrollAdvanced />,
      },
      {
        path: "use-scroll-with-container",
        element: <UseScrollWithContainer />,
      },
      {
        path: "reveal-links",
        element: <RevealLinks />,
      },
      {
        path: "slide-tabs",
        element: <SlideTabs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
