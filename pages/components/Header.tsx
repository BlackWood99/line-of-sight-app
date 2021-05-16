import styled from '@emotion/styled'
import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IHeaderProps {
    text?: boolean
}

const Header = ({text}: IHeaderProps) => {

    const Header = styled('header')`
        padding: 3rem 0;
        height: 150px;
        width: 100%;
        margin-bottom: 30px;
    `

    const Container = styled('div')`
        width: 100%;
        max-width: 1460px;
        margin: 0 auto;
        position: relative;
    `

    const GameTitle = styled('h1')`
        font-family: 'Roboto';
        font-size: 48px;
        font-weight: bold;
        line-height: 75px;
        color: #2B3172;
        text-align: center;
    `

    const Logo = styled('div')`
        position: absolute;
        top: 0;
        right: 3rem;
    `

    return (
        <Header>
            <Container>
                {
                    text ? 
                    <GameTitle>Тренажер «Поле зрения»</GameTitle>
                    : null
                }
            
                <Logo>
                    <Link href='/'>
                        <a>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={247}
                                height={94}
                            />
                        </a>
                    </Link>
                </Logo>
            </Container>
        </Header>
    )
}

export default Header
