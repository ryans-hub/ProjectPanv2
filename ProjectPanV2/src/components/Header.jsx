import Navigation from "./Navigation";
import "../index.css"

function Header() {

    return (
        <>
            <header>
                <h1>Ryan Pan</h1>
                <h2>Aspiring Fullstack Engineer</h2>
                <p>
                I study web development through ASU's sponsored Coding Bootcamp, building front-end/back-end products using the MERN Stack.
                </p>
                <Navigation />
            </header>
        </>
       

    );

}

export default Header;