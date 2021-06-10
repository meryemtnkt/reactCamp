import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu, Image } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")

    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />

                <Menu.Menu position='right'>
                    <CartSummary />
                    {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} />}

                </Menu.Menu>
            </Container>
        </Menu>
    )
}
