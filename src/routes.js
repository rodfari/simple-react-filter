import { createBrowserRouter } from "react-router-dom";
import { chamarEndpoint, GetEndpointById } from "./Services/FetchServices";
import RealStateList from "./Pages/Properties/RealStateList.jsx";
import Detail from "./Pages/Detail/Detail.jsx";


export const AppRoute = createBrowserRouter([
    {
        path: '/',
        element: <RealStateList />,
        loader: chamarEndpoint,
    },
    {
        path: '/detail/:id',
        //id: 'detail-id',
        loader: GetEndpointById,
        element: <Detail />,
        // children: [
        //     {
        //         index: true,
        //     }
        // ],
    }
]);