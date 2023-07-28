import React from "react";
import Login from "./Components/LoginPage/LoginPage";
import SignUpForm1 from "./Components/SignUpForm_1/SignUpForm1"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm2 from "./Components/SignUpForm_2/SignUpForm2";
import SignUpForm3 from "./Components/SignUpForm_3/SignUpForm3";
import SignUpForm4 from "./Components/SignUpForm_4/SignUpForm4";
import SignUpFrom5 from "./Components/SignUpForm_5/SignUpForm5";
import SignUpForm6 from "./Components/SignUpForm_6/SignUpForm6";
import SignUpForm7 from "./Components/SignUpForm_7/SignUpForm7";

const router = createBrowserRouter([
    {path:'/' , element: <Login/> },
    { path: '/Page1', element: <SignUpForm1 /> },
    { path: '/Page2', element: <SignUpForm2 /> },
    { path: '/Page3', element: <SignUpForm3 /> },
    { path: '/Page4', element: <SignUpForm4 /> },
    { path: '/Page5', element: <SignUpFrom5 /> },
    { path: '/Page6', element: <SignUpForm6 /> },
    { path: '/Page7', element: <SignUpForm7 /> }
])

const App = () => {
    return (<>
        <RouterProvider router={router} />
    </>
    )
}

export default App;