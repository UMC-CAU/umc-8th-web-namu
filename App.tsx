import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Homepage from './pages/home'
import MoviesPage from './pages/movies'
import NotFound from './pages/not-found'
import RootLayout from './layout/root-layout'
import MovieDetailPage from './pages/MovieDetailPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "movies/:category",
        element: <MoviesPage/>
      },
      {
        path: "movie/:movieId",
        element: <MovieDetailPage/>
      }
    ]
  },
])

function App() {
  return <RouterProvider router= {router}/>
}

export default App
