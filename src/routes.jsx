import { createBrowserRouter } from 'react-router-dom'

import Home from './views/index.jsx'
import Triangle from './views/Triangle.jsx'
import Flexbox from './views/Flexbox.jsx'
import CssDocs from './views/Cssdocs.jsx'
import Cssgradients from './views/Cssgradients.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/triangle',
        element: <Triangle />,
      },
      {
        path: '/flexbox',
        element: <Flexbox />,
      },
      {
        path: '/css-docs',
        element: <CssDocs />,
      },
      {
        path: '/css-gradients',
        element: <Cssgradients />,
      },
    ],
  },
])
