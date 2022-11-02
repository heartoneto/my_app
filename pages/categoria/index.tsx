import { Categoria } from "@prisma/client";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { FlexboxGrid } from "rsuite";
import Layout from "../../components/Layout/Layout";

import prisma from "../../lib/db/prisma";

interface Props {
    expandedMenu: boolean,
    items: Categoria[],
};

export const getStaticProps: GetServerSideProps = async (context) => {
    const items = await prisma.categoria.findMany();

    return {
        props: { items },
    };
};

const CategoriasPage = (props: Props) => {
    return (
        <Layout expandedMenu={props.expandedMenu} activeKey="categoria" title="Categorias">
            <h3>Cant cats: {props.items.length}</h3>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={4}>
                    {
                        props.items.map((item: Categoria) => (
                            <Link key={item.id} href={"/categoria/" + item.nombre}>{item.nombre}</Link>
                        ))
                    }
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Layout>
    );
};


export default CategoriasPage;
