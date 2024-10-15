import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
