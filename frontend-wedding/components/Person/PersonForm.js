import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ClientForm = () => {
  const [client, setClient] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    brday: "",
    brcountry: "",
    gender: "",
    dpermresident: "",
    countrycitizenship: "",
    anum: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const [genders, setGenders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/gender');
        const data = await response.json();
        setGenders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);





  const handleGenderChange = (event) => {
    const selectedGenderValue = event.target.value;

    setClient((prevClient) => ({
      ...prevClient,
      gender: selectedGenderValue,
    }));
  };




  useEffect(() => {
    if (params.PRN_ID) {
      loadClient(params.PRN_ID);
    }
  }, [params.PRN_ID]);

  const loadClient = async (PRN_ID) => {
    //const res = await fetch(`http://localhost:4000/person/${id}`, {
    const res = await fetch("http://localhost:4000/person/" + PRN_ID, {
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    });
    const data = await res.json();
    console.log(data)
    setClient({
      firstname: data.PRN_NAME,
      middlename: data.PRN_MIDDLENAME,
      lastname: data.PRN_LASTNAME,
      brday: data.PRN_BRDAY.split('T')[0],
      brcountry: data.PRN_BRCOUNTRY,
      gender: data.PRN_GENDER,
      dpermresident: data.PRN_D_PERM_RESIDENT.split('T')[0],
      countrycitizenship: data.PRN_COUNTRY_CITIZENSHIP,
      anum: data.PRN_A_NUM,
    });

    // setClient({
    //   firstname: data.firstname,
    //   middlename: data.middlename,
    //   lastname: data.lastname,
    //   brday: data.brday,
    //   brcountry: data.brcountry,
    //   gender: data.gender,
    //   dpermresident: data.dpermresident,
    //   countrycitizenship: data.countrycitizenship,
    //   anum: data.anum,
    // });
    setEditing(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        const response = await fetch(
          "http://localhost:4000/person/" + params.PRN_ID,
          {
            method: "PUT",
            body: JSON.stringify(client),
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("jwt"),
            },
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/person", {
          method: "POST",
          body: JSON.stringify(client),
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("jwt"),
          },
        });
        await response.json();
      }

      setLoading(false);
      navigate("/person");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setClient({ ...client, [e.target.name]: e.target.value });

    console.log(client);

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={12} md={6}>
        <Card
          sx={{ mt: 5, p: 3 }}
          style={{
            backgroundColor: "#1E272E",
            width: "80%",
          }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            { editing ? "Update Client" : "Create Client"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your First Name"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="firstname"
                onChange={handleChange}
                value={client.firstname}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <TextField
                variant="filled"
                label="Write your Middle Name"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="middlename"
                onChange={handleChange}
                value={client.middlename}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Write your Last Name"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="lastname"
                onChange={handleChange}
                value={client.lastname}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              


              <TextField
                variant="filled"
                label="Type your country"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="brcountry"
                onChange={handleChange}
                value={client.brcountry}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              {/* <TextField
                variant="filled"
                label="Select your gender"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="gender"
                onChange={handleChange}
                value={client.gender}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              /> */}

              <FormControl variant="filled" fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                   value={client.gender}
                  // onChange={handleChange}
                  // value={selectedGender}
                  onChange={handleGenderChange}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender.GNR_ID} value={gender.GNR_ID}>
                      {gender.GRN_DESC}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              

              <TextField
                variant="filled"
                label="Type your country citizenship"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="countrycitizenship"
                onChange={handleChange}
                value={client.countrycitizenship}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <TextField
                variant="filled"
                label="Type your A-Number"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="anum"
                onChange={handleChange}
                value={client.anum}
                inputProps={{ style: { color: "white" }, maxLength: 8 }}
                InputLabelProps={{ style: { color: "white" } }}
              />


              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!client.middlename || !client.lastname}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ClientForm;
