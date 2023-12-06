import Blog from "../components/pages/Blog";
import ErrorPage from "../components/pages/ErrorPage";
import Main from "../components/pages/Main";
import Projects from "../components/pages/Projects";

export const routes = [
    {path: '/personal-projects', component: <Projects/>, exact: true},
    {path: '/blog', component: <Blog/>, exact: true},
    {path: '/', component: <Main/>, exact: true},
    {path: '*', component: <ErrorPage/>, exact: true}
]