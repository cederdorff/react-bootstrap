import { Button, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import HomePageCards from "./components/HomePageCards";
import MainMenu from "./components/MainMenu";

function App() {
    return (
        <>
            <MainMenu />
            <header className="p-5 mb-4 bg-light">
                <Container className="py-5">
                    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
                    </p>
                    <Button variant="primary" size="lg">
                        Example button
                    </Button>
                </Container>
            </header>
            <HomePageCards />
            <Footer />
        </>
    );
}

export default App;
