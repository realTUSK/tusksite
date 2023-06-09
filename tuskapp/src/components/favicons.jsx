import Head from "next/head"

export default function Favicons() {
    return(
        <Head>
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f0f0f" />
            <meta name="msapplication-TileColor" content="#603cba" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}