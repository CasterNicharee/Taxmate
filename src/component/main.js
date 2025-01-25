import Footer from "../landing/footer";
import Header from "../landing/header";

function Main(props) {
    return (
        <body >
            <Header />
            {props.children}
            <Footer/>
        </body >
    );
}
export default Main;