import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png"></Image>
                <Dropdown pointing="top left" text="Meryem Tankut">
                    <Dropdown.Menu>
                        <Dropdown.Item  text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            
            </Menu.Item>
        </div>
    )
}
