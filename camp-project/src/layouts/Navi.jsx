import React , {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Menu } from "semantic-ui-react";
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
export default function Navi() {//header
    const[isAuthenticated,setIsAuthenticated]=useState(false)//ya true ya false olur. ya giriş yapar ya ypmaz.
    const history=useHistory();
    function handleSignOut(params){ //Çıkış yap
        setIsAuthenticated(false)
        history.push("/")
        
    }
    function handleSignIn(params){
        setIsAuthenticated(true)
    }
    
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        <CartSummary/>
                        {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn} bisey="1"/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}
