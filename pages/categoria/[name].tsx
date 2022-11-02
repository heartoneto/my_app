import { Categoria } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout, { ILayoutProps } from "../../components/Layout/Layout";
import prisma from "../../lib/db/prisma";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const name = context.params!.name! as string;

    const categoria = await prisma.categoria.findFirst({
        where: {
            nombre: {
                equals: name,
            },
        }
    });

    return {
        props: { categoria },
    };

};

interface Props {
    categoria: Categoria
};

const CatByName = (props: Props & ILayoutProps) => {

    return (
        <Layout expandedMenu={props.expandedMenu} activeKey="categoria" title={"Categoria" + props.categoria.id}>
            <h1>{props.categoria.nombre}</h1>
        </Layout>
    );
};

export default CatByName;
