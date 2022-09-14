import * as Style from './Layout.styles'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => (
  <Style.Layout>
    <Sidebar />
    <Style.Body>
      <Outlet />
    </Style.Body>
  </Style.Layout>
)

export default Layout
