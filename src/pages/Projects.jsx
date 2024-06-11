import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export default function Projects() {

    const viewInventoryFront = () => {
        window.open("https://github.com/kenoreyes238/keno-reyes-final-project-front");
    }

    const viewInventoryBack = () => {
        window.open("https://github.com/kenoreyes238/keno-reyes-final-project-back");
    }

    const viewYapperChat = () => {
        window.open("https://yapper-chat.netlify.app/");
    }

    const viewPokedex = () => {
        window.open("https://kreyes-pokedex-search.netlify.app");
    }

    const viewShopping = () => {
        window.open("https://shop-list-app-kreyes.netlify.app");
    }

    const viewGame = () => {
        window.open("https://tic-tac-toe-kreyes.netlify.app");
    }

    const viewEmail = () => {
        window.open("https://email-template-kreyes.netlify.app");
    }

    return (
        <Container fluid className="projects">
            <Row className="projectHead">
                <h1>Projects</h1>
            </Row>
            <Row className="oddNum">
               {/* YAPPER JOBS COMING SOON  */}
            </Row>
            <Row className="evenNum">
                <Col className="description">
                    <h3>MyInventory</h3>
                    <h4>
                        A simple inventory app that keeps track of product in stock. 
                        Can add, edit, and delete products shown in the database.
                    </h4>
                    <a onClick={viewInventoryFront}>
                       <Button variant="light" className="inventory">View Front-End Repo</Button> 
                    </a>
                    <a onClick={viewInventoryBack} className="backRep">
                       <Button variant="light" className="inventory">View Back-End Repo</Button> 
                    </a>
                </Col>
                <Col>
                    <img src="MyInventory.png" alt="MyInventory App"/>
                    <h1>01</h1>
                </Col>
            </Row>
            <Row className="oddNum">
                <Col>
                    <img src="YapperChat.png" alt="Yapper Chat"/>
                    <h1>02</h1>
                </Col>
                <Col className="description">
                    <h3>Yapper Chat</h3>
                    <h4>
                        A messaging app that let&apos;s you chat with other users in a 
                        group channel, or chat with one user in a private direct-message.
                    </h4>
                    <a onClick={viewYapperChat}>
                       <Button variant="light" className="yapper">View Yapper Chat</Button> 
                    </a>
                </Col>
            </Row>
            <Row className="evenNum">
                <Col>
                    <h3>Pokedex Search</h3>
                    <h4>
                        Simple API project that fetches the searched Pokemon and maps out 
                        the image and description of the Pokemon.
                    </h4>
                    <a onClick={viewPokedex}>
                       <Button variant="light" className="pokedex">View Pokedex</Button> 
                    </a>
                </Col>
                <Col>
                    <img src="Pokedex.png" alt="Pokedex Search" />
                    <h1>03</h1>
                </Col>
            </Row>
            <Row className="oddNum">
                <Col>
                    <img src="shopping.png" alt="Shopping List App"/>
                    <h1>04</h1>
                </Col>
                <Col className="description">
                    <h3>Shopping List App</h3>
                    <h4>
                        Built functional shopping list app using DOM manipulation and event 
                        handling in JavaScript. Allows users to list and keep track of items 
                        needed for shopping.
                    </h4>
                    <a onClick={viewShopping}>
                       <Button variant="light" className="shopping">View Shopping App</Button> 
                    </a>
                </Col>
            </Row>
            <Row className="evenNum">
                <Col>
                    <h3>Tic Tac Toe</h3>
                    <h4>
                        Project for Bay Valley Tech Module 3. Built a tic tac toe game using DOM 
                        manipulation in JavaScript. User plays against CPU.
                    </h4>
                    <a onClick={viewGame}>
                       <Button variant="light" className="game">View Tic Tac Toe</Button> 
                    </a>
                </Col>
                <Col>
                    <img src="game.png" alt="Tic Tac Toe Game" />
                    <h1>05</h1>
                </Col>
            </Row>
            <Row className="oddNum">
                <Col>
                    <img src="BootstrapEmail.jpg" alt="Email Bootstrap template"/>
                    <h1>06</h1>
                </Col>
                <Col className="description">
                    <h3>Bootstrap Email Template</h3>
                    <h4>
                    Built a sample email messaging template site using HTML, CSS, and Bootstrap to create
                    a responsive layout. Used Bootstrap grids to create breakpoints as page layout changes.
                    </h4>
                    <a onClick={viewEmail}>
                       <Button variant="light" className="email">View Email Template</Button> 
                    </a>
                </Col>
            </Row>
        </Container>
    )
}