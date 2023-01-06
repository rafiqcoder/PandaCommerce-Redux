import Head from 'next/head';
import styles from '../styles/Layout.module.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({children}) => {
    return (
        <>
        <Header></Header>
            {children}
            <Footer></Footer>
        </>
    
    );
};

export default Layout;