import home from "../pages/home";
import notFound from "../pages/pageNotFound";
import todo from "../pages/toDoPage";

const routes = {
    "/": home,
     "/todo": todo
   
}

const Router =  function (pathname)  {

const isValidRoute = Object.keys(routes).find(key => key===pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
        
        if(isValidRoute === undefined)
        {
            app.appendChild(notFound())
        }else
        {
            app.appendChild(routes[isValidRoute]()) 
        }
}

export {Router}