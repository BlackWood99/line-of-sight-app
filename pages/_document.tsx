import React from "react"
import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document"
import styled from "@emotion/styled"
import Header from "../components/Header"

export class AppDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {

        const AppWrapper = styled("body")`
            background-color: #f7f9ff;
            min-height: 100vh;
	    `

        const Container = styled("div")`
            width: 100%;
            max-width: 1460px;
            margin: 0 auto;
        `

        return (
            <Html>
                <Head>
                    <meta name="description" content="test task 'Light of Sight'" />
                    <title>Light of Sight</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <Header />

                <AppWrapper>
                    <Container>
                        <Main />
                        <NextScript />
                    </Container>
                </AppWrapper>
            </Html>
        )
    }
}

export default AppDocument
