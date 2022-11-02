import Layout from "../../components/Layout/Layout";

interface Props {
    expandedMenu: boolean,
}

const ProductoMasVendio = (props: Props) => {
    return (
        <Layout expandedMenu={props.expandedMenu} activeKey="mas_vendido" title="Producto más vendido">
            <h3>Producto más vendido</h3>
        </Layout>
    )
}

export default ProductoMasVendio;
