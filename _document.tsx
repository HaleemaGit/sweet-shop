import Document, { Head, Html, NextScript, DocumentContext } from 'next/document';
import { Layout } from './components/layout/layout';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="pl-PL" className="h-full">
        <Head></Head>
        <body className="h-full">
          <NextScript />
        </body>
      </Html>
    );
  }
}