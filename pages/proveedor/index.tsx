import { Proveedor } from "@prisma/client";
import { GetServerSideProps } from "next";
import { EventHandler, MouseEventHandler, useState } from "react";
import {
    Modal, Container, FlexboxGrid, Footer, Header, Table, Pagination,
    Content, Button, ButtonToolbar, Placeholder, Form,
} from "rsuite";
import { useBoolean } from "usehooks-ts";
import Layout from "../../components/Layout/Layout";

import prisma from "../../lib/db/prisma";

const { Column, HeaderCell, Cell } = Table;

interface Props {
    items: Proveedor[],
    expandedMenu: boolean,
    activeKey: string,
};

export const getStaticProps: GetServerSideProps = async (context) => {
    const items = await prisma.proveedor.findMany({
        select: {
            id: true,
            nombre: true,
            Contacto: true,
        },
    });

    const createProveedor = async (nombre: string, telefono: string, email: string) => {
        const res = prisma.proveedor.create({
            data: {
                nombre: nombre,
                Contacto: {
                    create: {
                        telefono: telefono,
                        email: email,
                    }
                },
            },
        });
    };

    return {
        props: { items },
    };
};


interface IModalProps {
    isOpen: boolean,
    onConfirm: MouseEventHandler,
    onCancel: MouseEventHandler,
}

const buildTable = (data: Props) => {
    const { Column, HeaderCell, Cell } = Table;
    const totalRecords = data.items.length;


    const tablePagination = () => {
        // if (totalRecords < 10) {
        //     return (
        //         <b>Total: {totalRecords}</b>
        //     )
        // } else {
        return (
            <FlexboxGrid justify="center">
                <Pagination total={totalRecords} limit={10} activePage={1} />
            </FlexboxGrid>
        )
        // }
    };

    if (data.items.length > 0) {
        return (
            <Container>
                <Content>
                    <Table data={data.items}>
                        <Column>
                            <HeaderCell>Id</HeaderCell>
                            <Cell dataKey="id" />
                        </Column>
                        <Column>
                            <HeaderCell>Nombre</HeaderCell>
                            <Cell dataKey="nombre" />
                        </Column>
                        <Column>
                            <HeaderCell>Teléfono</HeaderCell>
                            <Cell dataKey="Contacto.telefono" />
                        </Column>
                        <Column>
                            <HeaderCell>Email</HeaderCell>
                            <Cell dataKey="Contacto.email" />
                        </Column>
                        <Column>
                            <HeaderCell>{" "}</HeaderCell>
                            <Cell>
                                <Button>Actualizar</Button>
                            </Cell>
                        </Column>
                        <Column>
                            <HeaderCell>{" "}</HeaderCell>
                            <Cell>
                                <Button>Eliminar</Button>
                            </Cell>
                        </Column>
                    </Table>
                </Content>

                <Footer>
                    {tablePagination()}
                </Footer>
            </Container>

        );
    } else {
        return (
            <Content>
                <h3>No se encontraron elementos</h3>
            </Content>
        );
    }
};

const ProveedorPage = (data: Props) => {
    const isOpen = useBoolean(false);
    const handleOpen = () => {
        isOpen.setTrue();
    };
    const handleOk = () => {
        isOpen.setTrue();
    };
    const handleCancel = () => {
        isOpen.setFalse();
    };

    return (
        <Layout expandedMenu={data.expandedMenu} activeKey={data.activeKey} title="Proveedores" >
            <Container>
                <Header>
                    <h3>Proveedores:</h3>
                </Header>

                <ButtonToolbar>
                    <Button onClick={handleOpen}>Nuevo</Button>
                    <Button>Seleccionar todos</Button>
                    <Button>Eliminar seleccionados</Button>
                </ButtonToolbar>

                <Modal open={isOpen.value}>
                    <Modal.Header>
                        <Modal.Title>Crear proveedor:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => console.log(e)}>
                            <Form.Group controlId="nombre">
                                <Form.ControlLabel>Nombre</Form.ControlLabel>
                                <Form.Control name="nombre" />
                                <Form.HelpText>Debe llenar este campo</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="telefono">
                                <Form.ControlLabel>Teléfono</Form.ControlLabel>
                                <Form.Control name="telefono" />
                                <Form.HelpText>Debe llenar este campo</Form.HelpText>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.ControlLabel>Email</Form.ControlLabel>
                                <Form.Control name="email" />
                                <Form.HelpText>Debe llenar este campo</Form.HelpText>
                            </Form.Group>
                            <Form.Group>
                                <ButtonToolbar>
                                    <Button onClick={handleOk} type="submit" appearance="primary">Submit</Button>
                                    <Button onClick={handleCancel} appearance="default">Cancel</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
                {buildTable(data)}
            </Container>
        </Layout>
    );
};


export default ProveedorPage;
