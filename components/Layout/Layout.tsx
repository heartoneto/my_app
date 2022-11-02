import { ReactNode, useEffect, useLayoutEffect } from 'react';
import { Container, Content, FlexboxGrid, Footer, Header, Nav, Navbar, Sidebar, Sidenav } from 'rsuite';
import { useBoolean } from 'usehooks-ts';
import SideNavigation from '../SideNavigation/SideNavigation';


import styles from './Layout.module.css'

export interface ILayoutProps {
    title: string,
    expandedMenu: boolean,
    activeKey: string,
    children: ReactNode,

}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    return (
        <div>
            <Container>
                <Sidebar>
                    <SideNavigation activeKey={props.activeKey} expandedMenu={props.expandedMenu} />
                </Sidebar>
                <Container>
                    <Header>
                        <Navbar appearance='inverse'>
                            <Nav>
                                <Nav.Item eventKey="home" href="/">
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item eventKey="usuarios" href="/usuario">
                                    Usuarios
                                </Nav.Item>
                                <Nav.Item eventKey="productos" href="/producto">
                                    Productos
                                </Nav.Item>
                                <Nav.Item eventKey="categorias" href="/categoria">
                                    Categorias
                                </Nav.Item>
                                <Nav.Menu>
                                    <Nav.Item>AAA</Nav.Item>
                                </Nav.Menu>
                            </Nav>
                        </Navbar>
                    </Header>

                    <Content>
                        <FlexboxGrid justify="center">
                            {props.children}
                        </FlexboxGrid>
                    </Content>

                    <Footer>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item>
                                <div>Foooooooooooter aquí</div>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Footer>
                </Container>
            </Container>
        </div>
    );

}

export default Layout;
