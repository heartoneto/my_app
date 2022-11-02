import { Categoria, Producto } from '@prisma/client';
import { GetServerSideProps } from 'next'
import { AppProps } from 'next/app';
import { useRef, useState } from 'react';
import { Container, Content, Dropdown, FlexboxGrid, Form, Header, SelectPicker, Table } from 'rsuite';
import { DropdownComponent } from 'rsuite/esm/Dropdown/Dropdown';
import { useEventCallback, useEventListener } from 'usehooks-ts';
import Layout from '../../components/Layout/Layout';
import prisma from '../../lib/db/prisma';

export const getStaticProps: GetServerSideProps = async (context) => {
    const productos = await prisma.producto.findMany({
        select: {
            id: true,
            nombre: true,
            Categoria: true,
            Proveedor: true,
        },
    });
    
    const categorias = await prisma.categoria.findMany({});

    // return {
    //     props: {
    //         items: productos,
    //         categorias: categorias,
    //     },
    //     // revalidate: 10,
    // }

    return {
        props: {
            categorias: categorias,
        }
    }
};

interface Props {
    items: Producto[],
    categorias: Categoria[],
}

interface SelectedCat {
    label: string | null,
    value: number | null,
}

type SelectedCatProp = SelectedCat | null;

const ProductosPage = (props: Props)  => {
    const { Column, HeaderCell, Cell } = Table;
    const catSelectData: SelectedCat[] = props.categorias.map(v => ({ label: v.nombre, value: v.id }));

    return (
        <Layout expandedMenu={true} activeKey="productos_categoria" title='Productos'>
            <Container>
                <Header>
                    <h1>Productos por categoría</h1>
                </Header>
                <Container>
                    <Header>
                        <FlexboxGrid justify='start'>
                            <SelectPicker placeholder="Seleccione una categoría" label="Categoría:" data={catSelectData} cleanable={false} />
                        </FlexboxGrid>
                    </Header>
                    <Content>
                        <Table data={props.items}>
                            <Column>
                                <HeaderCell>Nombre</HeaderCell>
                                <Cell dataKey='nombre' />
                            </Column>
                            <Column>
                                <HeaderCell>Categoría</HeaderCell>
                                <Cell dataKey='Categoria.nombre' />
                            </Column>
                            <Column>
                                <HeaderCell>Proveedor</HeaderCell>
                                <Cell dataKey='Proveedor.nombre' />
                            </Column>
                        </Table>
                    </Content>
                </Container>
            </Container>
        </Layout>
    );
};

export default ProductosPage;
