import { Nav, Sidenav } from 'rsuite';

import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

import styles from './ideNavigation.module.css'
import { useBoolean } from 'usehooks-ts';

export interface ISideNavProps {
    expandedMenu: boolean,
    activeKey: string,
}

const SideNavigation: React.FC<ISideNavProps> = (props: ISideNavProps) => {
    const expandedMenu = useBoolean(props.expandedMenu);
    
    return (
        <Sidenav expanded={props.expandedMenu}>
            <Sidenav.Body>
                <Nav activeKey={props.activeKey}>
                    <Nav.Item eventKey="1" href="/" icon={<DashboardIcon />}>
                        Dashboard
                    </Nav.Item>
                    <Nav.Menu eventKey="reportes" title="Reportes" icon={<GroupIcon />}>
                        <Nav.Item eventKey="mas_vendido" href="/reportes/mas_vendido">Productos más vendidos</Nav.Item>
                        <Nav.Item eventKey="reportes_todos">Otros reportes</Nav.Item>
                    </Nav.Menu>
                    <Nav.Item eventKey="proveedor" href="/proveedor" icon={<GroupIcon />}>
                        Proveedores
                    </Nav.Item>
                    <Nav.Menu eventKey="productos_menu" title="Productos" icon={<GroupIcon />}>
                        <Nav.Item eventKey="productos_categoria" href="/producto">Por categoria</Nav.Item>
                        <Nav.Item eventKey="productos_todos" href="/producto">Ver todos</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu eventKey="ventas_menu" title="Ventas" icon={<GroupIcon />}>
                        <Nav.Item eventKey="venta_cliente" href="/venta/cliente">Por cliente</Nav.Item>
                        <Nav.Item eventKey="venta_vendedor" href="/venta/vendedor">Por vendedor</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu eventKey="3" title="Nómina" icon={<MagicIcon />}>
                        <Nav.Item eventKey="3-1">Vendedores</Nav.Item>
                        <Nav.Item eventKey="3-2">Salarios</Nav.Item>
                    </Nav.Menu>

                    <Nav.Item eventKey="configuracion" href="/configuracion" icon={<GearCircleIcon />}>
                        Configuración
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
            <Sidenav.Toggle onToggle={expandedMenu.toggle} />
        </Sidenav>
    );
}

export default SideNavigation;
