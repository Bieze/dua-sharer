import {
    Navbar,
    NavbarBrand,
    NavbarItem,
    NavbarContent,
} from "@nextui-org/navbar"
import {
    Button
} from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { signOut } from "firebase/auth";
import React from "react";
import useFirebaseAuth from "../firebase/useFirebaseAuth";
import { useAuth } from "../firebase/context/FirebaseAuthContext";

export default function MenuBar() {
    const { authUser, signOut } = useAuth();
    
    return (
        <Navbar position="sticky">
            <NavbarBrand>
                <b className='text-xl'>Ds v1.2</b>

            </NavbarBrand>


            <NavbarContent justify="end">
                {!authUser &&
                    <NavbarItem>
                        <Button as={Link} href="register" type="submit" color="primary">
                            Sign up
                        </Button>
                    </NavbarItem>
                }
                {!authUser &&
                <NavbarItem>
                    <Button as={Link} href="login" type="submit" color="primary">
                        Login
                    </Button>
                </NavbarItem>
                
                }
                {authUser &&
                <NavbarItem>
                    <Button as={Link} onClick={signOut} href="#" type="submit" color="danger">
                        Logout
                    </Button>
                </NavbarItem>
                }
            </NavbarContent>
        </Navbar >
    )
}

