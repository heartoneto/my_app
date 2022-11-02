import Layout from "../../components/Layout/Layout";

interface Props {
    activeKey: string;
    expandMenu: boolean;
};

const IndexPage = (props: Props) => {
    return (
        <Layout activeKey={"configuracion"} expandedMenu={props.expandMenu} title="Configuración">
            <div>
                <h1>Configuración</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis egestas. Quis varius quam quisque id diam vel quam elementum pulvinar. Eros donec ac odio tempor orci dapibus ultrices in. Ut porttitor leo a diam. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Ut lectus arcu bibendum at varius vel pharetra vel turpis. At in tellus integer feugiat scelerisque varius. Morbi enim nunc faucibus a. Sed blandit libero volutpat sed cras. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Hendrerit gravida rutrum quisque non. Euismod lacinia at quis risus sed. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vestibulum rhoncus est pellentesque elit. Lacus vel facilisis volutpat est velit. Id donec ultrices tincidunt arcu non. Convallis tellus id interdum velit laoreet id donec. Etiam non quam lacus suspendisse faucibus interdum posuere.
                </p>
                <p>
                    Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Id ornare arcu odio ut sem nulla pharetra diam. Egestas integer eget aliquet nibh. Enim nulla aliquet porttitor lacus luctus. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Tortor id aliquet lectus proin nibh. Suscipit adipiscing bibendum est ultricies integer quis auctor. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. In est ante in nibh mauris cursus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Erat imperdiet sed euismod nisi porta lorem mollis.
                </p>
            </div>
        </Layout>
    );
};


export default IndexPage;
