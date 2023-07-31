import '../../Styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'


function Myapp({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default Myapp;