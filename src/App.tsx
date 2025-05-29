import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import HomeLayout from './layouts/HomeLayout'
import ProtectedLayout from './layouts/HomeLayout'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import { AuthProvider } from './week5/context/AuthContext'
import GoogleLoginRedirectPage from './pages/GoogleLoginRedirectPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LpDetailPage from './pages/LpDetailPage'
import ThrottlePage from './pages/ThrottlePage'
import HomeLayoutWithoutFooter from './layouts/HomeLayoutWithoutFooter'

export const queryclient = new QueryClient()

const publicRoutes:RouteObject[] = [
    {
    path: "/",
    element:<HomeLayoutWithoutFooter/>,
  errorElement: <NotFoundPage/>,
  children: [ 
    {index: true, element: <HomePage/>},
  ]
  },
  {
    path: "/",
    element:<HomeLayout/>,
  errorElement: <NotFoundPage/>,
  children: [ 
    {path:'login', element: <LoginPage/>},
    {path:'signup', element: <SignupPage/>},
    {path:"v1/auth/google/callback", element: <GoogleLoginRedirectPage/>},
    {path:"throttle", element: <ThrottlePage/>},
  ]
  }
]

const protectedRoutes:RouteObject[] = [
  {
    path:"/",
    element: <ProtectedLayout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "my",
        element: <MyPage/>,
      },
      {path:"lps/:id", element: <LpDetailPage/>},
    ]
  }
]

const router = createBrowserRouter([...publicRoutes,...protectedRoutes])

function App() {

  return (
    <QueryClientProvider client={queryclient}>
    <AuthProvider>
      <RouterProvider router={router}/>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
 