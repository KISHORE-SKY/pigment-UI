
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import HomeSection from "./sections/home/heroSection";
import ColorPicker from "./sections/colorPicker/color";
import GlassMorphism from "./sections/glassEffect/glassbg";
import Buttons from "./sections/buttonSection/button";
import BoxShadow from "./sections/shadowBox/boxShadow";
import LinearGradients from "./sections/linearGradientSection/linearGradient";
import RadielGradient from "./sections/radialGradient/radiel";
import FormComponents from "./sections/formsSection/formui";
import ErrorElemet from "./sections/errorPage/errors";
import ThemeContainer from "./themeContent.jsx";



const rountingSections = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorElemet />,
    children: [
      {
        index: true, 
        element: <HomeSection />,
      },
      {
        path: "color", 
        element: <ColorPicker />,
      },
      {
        path:"button",
        element:<Buttons />
      },
      {
        path:"glassbg",
        element:<GlassMorphism />
      },
      {
        path:"boxShadow",
        element:<BoxShadow />
      },
      {
        path:"linearGradient",
        element:<LinearGradients />
      },
      {
        path:"radiel",
        element:<RadielGradient />
      },
      {
        path:"formui",
        element:<FormComponents />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContainer>
      <RouterProvider router={rountingSections} />
    </ThemeContainer>
  </StrictMode>
);
