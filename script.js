import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/header";
import Footer from "./src/footer";
import Body from "./src/body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/about";
import Contact from "./src/contact";
import RestaurantMenu from "./src/restaurantmenu";
import Profile from "./src/ProfileClass";
import CartPage from "./src/cartpage";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";


const AppLayout=()=>{
  return (
    <>
    <Provider store={appStore}>
      <Header/>
      <Outlet/>
      <Footer/>
      </Provider>
    </>

  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        children: [{
            path: "profile",
            element :<Profile/>
          }]

      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      }
    ]
  },
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);