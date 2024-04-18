import { createBrowserRouter } from "react-router-dom"
import ListPage from "../view/page/ListPage";
import Detail from "../view/page/detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ListPage/>
        ),
    },

    {
        path: "/detail/:gitIssueNumber",
        element: (
            <Detail/>
        ),
    },
]);

export default router;