import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"

import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt="" />

                    <Button>Try It Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas soluta magni voluptatibus nobis sit ipsa perferendis esse. Natus, aut eos. Nisi iure perspiciatis cum, dignissimos aut veritatis vel. Quos dolore reprehenderit necessitatibus ex excepturi sit natus repudiandae ab. Autem, voluptas accusamus fuga id mollitia laboriosam sapiente repellendus suscipit sit.</p>

                        <Button bg="#ff0099" color="#fff">
                        Get Started For Free
                        </Button>
                    </div>

                    <Image src="./images/illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}