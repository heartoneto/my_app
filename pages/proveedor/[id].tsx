import { Categoria, Proveedor } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout, { ILayoutProps } from "../../components/Layout/Layout";
import prisma from "../../lib/db/prisma";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = Number.parseInt(context.params!.id! as string);

    const proveedor = await prisma.proveedor.findFirst({
        where: {
            id: {
                equals: id,
            },
        }
    });

    return {
        props: { proveedor },
    };

};

interface Props {
    proveedor: Proveedor
};

const ProvById = (props: Props & ILayoutProps) => {
    const proveedor = props.proveedor;

    return (
        <Layout expandedMenu={props.expandedMenu} activeKey="proveedor" title={"Proveedor" + proveedor.id}>
            <h1>{proveedor.nombre}</h1>
        </Layout>
    );
};

export default ProvById;
