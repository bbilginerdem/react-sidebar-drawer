import { useMemo } from "react"
import { IconContext } from "react-icons/lib"
import { matchPath, useLocation } from "react-router-dom"
import { routes } from "../routes"
import * as Style from './Sidebar.styles'

const Sidebar = () => {
  const location = useLocation()
  const currentRoute = useMemo(() => routes.find(route => matchPath(location.pathname, route.path)), [location])
  console.log(currentRoute)

  return (
    <Style.Sidebar>
      {/* IconContext.Provider is used to set the default styles for all icons */}
      <IconContext.Provider value={{
        color: "white", size: "2em"
      }}>
        <Style.SidebarContent>
          {currentRoute?.sidebarNavItems?.map((item) => (
            <item.icon />
          ))}
        </Style.SidebarContent>
      </IconContext.Provider>
    </Style.Sidebar>

  )
}

export default Sidebar