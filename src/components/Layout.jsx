import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
                <Link to="/inicio">Inicio</Link>
                <Link to="/estadisticas">Estadísticas</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
            <Outlet />
            <footer>© García Salmaso.</footer>
        </>
    )
}

export default Layout