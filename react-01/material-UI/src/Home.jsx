import { Container, Typography } from "@mui/material";

function Home(){
    return(
    <Container>
        <Typography variant="h3" gutterBottom>
            Bienvenidos a la pagina principal
        </Typography>
        <Typography variant="body1" >
        Aqui encontraras informacion de mi APP en React.
        </Typography>
    </Container>
    );
}
export default Home;