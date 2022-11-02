import { Categoria, Producto } from "@prisma/client";
import { GetServerSideProps } from "next";
import { Container, Content, FlexboxGrid, Header, Table } from "rsuite";
import Layout, { ILayoutProps } from "../../components/Layout/Layout";
import prisma from "../../lib/db/prisma";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = Number.parseInt(context.params!.id! as string);

    const producto = await prisma.producto.findFirst({
        where: {
            id: {
                equals: id,
            },
        },
        select: {
            id: true,
            nombre: true,
            Categoria: true,
        },
    });
    const ventasCount = 0;

    if (producto !== null) {
        return ({
            props: {
                producto,
                categoria: producto.Categoria,
                ventasCount
            }
        });
    } else {
        return ({
            props: {
                producto: null,
                categoria: null,
                ventasCount: 0,
            }
        });
    }
};

interface Props {
    producto: Producto | null,
    categoria: Categoria | null,
    cantVentas: Number,
};

const Product = (props: Props & ILayoutProps) => {
    const { Column, HeaderCell, Cell } = Table;

    return (
        <Layout expandedMenu={props.expandedMenu} activeKey="producto" title='Productos'>
            <Container>
                <Header>
                    <h3>Products by id </h3>
                </Header>
                <Content>
                    <h3>
                        Producto: {props.producto?.nombre}
                    </h3>
                    <p>
                        Ctegoría: {props.categoria?.nombre}
                    </p>
                </Content>
            </Container>
        </Layout >
    );
};

export default Product;
