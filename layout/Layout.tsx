import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styles from './Layout.module.css';
import { FunctionComponent } from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <Sidebar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};