import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Header = () => {

    const Header = styled('header')`
        padding: 2rem 0;
        margin-bottom: 10px;
    `

    const Container = styled('div')`
        display: flex;
        justify-content: flex-end;

        width: 100%;
        max-width: 1460px;
        margin: 0 auto;
    `

    const GameTitle = styled('h1')`
        display: flex;
        align-items: center;
        text-align: center;
        font-family: 'Roboto';
        font-size: 54px;
        font-weight: bold;
        line-height: 65px;
        color: #2B3172;
    `

    const Logo = styled('div')`
        margin-left: 11%;
    `

    const Img = styled('img')`
        max-width: ${props => props.width || '200px'};
        max-height: ${props => props.height || '90px'};
        width: 100%;
        height: 100%;
    `

    return (
        <Header>
            <Container>
                 
                <GameTitle>Тренажер «Поле зрения»</GameTitle>
            
                <Logo>
                    <Link href='/'>
                        <a>
                            <Img src='/logo.png' width={'260px'} height={'110px'}/>
                        </a>
                    </Link>
                </Logo>
            </Container>
        </Header>
    )
}

export default Header
