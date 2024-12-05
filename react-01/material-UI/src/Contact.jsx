import { Container, Typography, Button, TextField } from "@mui/material";

function Contact(){
    return(
        <Container>
        <Typography variant="h3" gutterBottom>
                Contactenos
        </Typography>
        <form>
          <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mensaje"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
          Enviar
        </Button>
        </form>

        </Container>
    );
}
export default Contact;