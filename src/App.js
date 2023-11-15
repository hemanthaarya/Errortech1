import BlogPage from "./ErrorTech/BlogPage"
import CartPage from "./ErrorTech/CartPage"
import ContactPage from "./ErrorTech/ContactPage"
import HomePage from "./ErrorTech/HomePage"
import LoginPage from "./ErrorTech/LoginPage"
import MyAccountPage from "./ErrorTech/MyAccountPage"
import RegisterPage from "./ErrorTech/RegisterPage"
import SearchPage from "./ErrorTech/SearchPage"
import ShopPage from "./ErrorTech/ShopPage"
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
      {
        path: "ContactPage",
        element: <ContactPage/>,
      },
      {
        path: "BlogPage",
        element: <BlogPage/>,
      },
      {
        path: "LoginPage",
        element: <LoginPage/>,
      },
      {
        path: "RegisterPage",
        element: <RegisterPage/>,
      },
      {
        path: "MyAccountPage",
        element: <MyAccountPage/>,
      },
      {
        path: "SearchPage",
        element: <SearchPage/>,
      },
      {
        path: "CartPage",
        element: <CartPage/>,
      },
      {
        path: '/ShopPage',
        element: <ShopPage />,
      }

  ]);

function App(){
    return(
        <div>
            <RouterProvider router={router} >
            <Routes>
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/ShopPage/6productId" element={<ShopPage />} />
        </Routes>
            </RouterProvider>
        </div>
    )
}
export default App
   