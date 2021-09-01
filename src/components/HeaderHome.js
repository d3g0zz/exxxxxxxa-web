import React from "react"
import { render } from "react-dom";
import styled from "styled-components"

const HeaderHome = () => {
    //const {title, description, button} = this.props;

    return (
        <Container>
            <Box>
                <Title>{}</Title>
                <Description>{}</Description>
                <Button>{}</Button>
            </Box>
            <Box>
                <Images></Images>
            </Box>

        </Container>
    )

}

export default HeaderHome

const Container = styled.div`
background: red;
height: 700px;
display: flex;
justify-content: space-around;
align-items: center;
align-content: center;
`
const Box = styled.div`
background: blue;
`
const Title = styled.h2`
background: green;
`
const Description = styled.p`
background: green;
`
const Button = styled.button`
background: green;
`
const Images = styled.div`
background: green;
width: 550px;
height: 550px;
border-radius: 50%;
`