import { useState, useEffect, Fragment } from "react";
// import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import {
  Toolbar,
  Box,
  Container,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
// import ButtonAppBar from "../Navbar";
// import "../index.css";

const ClientList = () => {
  const [client, setclient] = useState([]);
  const navigate = useNavigate();

  const loadclient = async () => {
    const response = await fetch("http://localhost:4000/person", {
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    });
    const data = await response.json();
    setclient(data);
  };

  // const handleDelete = async (PRN_ID) => {
  //   try {
  //     await fetch(`http://localhost:4000/person/${PRN_ID}`, {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: localStorage.getItem("jwt"),
  //       },
  //     });
  //     setclient(client.filter((clients) => clients.PRN_ID !== PRN_ID));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    loadclient();
  }, []);

  return (
    <>
      {/* <ButtonAppBar /> */}

      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Person
            </Typography>

            <Button
              variant="outlined"
              color="success"
              size="large"
              onClick={() => navigate("/person/new")}
            >
              New Person
            </Button>
          </Toolbar>
        </Container>
      </Box>

      {client.map((clients) => (
        <Fragment key={clients.PRN_ID}>
          <Card
            style={{
              marginBottom: ".7rem",
              backgroundColor: "#1e272e",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: "white",
                }}
              >
                <Typography>
                  {clients.PRN_NAME} {clients.PRN_MIDDLENAME} {clients.PRN_LASTNAME}
                </Typography>
                {/* <Typography>{clients.middlename}</Typography>
              <Typography>{clients.lastname}</Typography> */}
              </div>
              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navigate(`/person/${clients.PRN_ID}/show`)}
                >
                  Show
                </Button>

                {/* <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => navigate(`/person/${clients.PRN_ID}/edit`)}
                  style={{ marginLeft: ".5rem" }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleDelete(clients.PRN_ID)}
                  style={{ marginLeft: ".5rem" }}
                >
                  Delete
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </Fragment>
      ))}
    </>
  );
};

export default ClientList;
