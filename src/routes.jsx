import { createBrowserRouter } from 'react-router-dom'

import Home from './views/index.jsx'
import Triangle from './views/Triangle.jsx'
import Flexbox from './views/Flexbox.jsx'

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
    ],
  },
])
