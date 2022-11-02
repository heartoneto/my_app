import { Button, ButtonToolbar, Container, Content, FlexboxGrid, Footer, Form, Header, Navbar, Panel } from "rsuite";

const LoginPage = () => {
    return (
        <div className="login-page">
            <Container>
                <Header>
                    <Navbar>
                        <Navbar.Brand>
                            A
                        </Navbar.Brand>
                        <h1>Test</h1>
                    </Navbar>
                </Header>
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={12}>
                            <Panel header={<h3>Login</h3>} bordered>
                                <Form fluid>
                                    <Form.Group>
                                        <Form.ControlLabel>Username or email address</Form.ControlLabel>
                                        <Form.Control name="name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.ControlLabel>Password</Form.ControlLabel>
                                        <Form.Control name="password" type="password" autoComplete="off" />
                                    </Form.Group>
                                    <Form.Group>
                                        <ButtonToolbar>
                                            <Button appearance="primary">Sign in</Button>
                                            <Button appearance="link">Forgot password?</Button>
                                        </ButtonToolbar>
                                    </Form.Group>
                                </Form>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
                <Footer>Footer</Footer>
            </Container>
        </div >
    );
};

export default LoginPage;
