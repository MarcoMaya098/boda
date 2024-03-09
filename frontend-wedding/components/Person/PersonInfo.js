// import * as React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect, Fragment } from "react";

// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ButtonAppBar from "../Navbar";
// import dayjs from "dayjs";

// import {
//   Grid,
//   Card,
//   CardContent,
//   // TextField,
//   // Select,
//   // MenuItem,
//   // InputLabel,
//   // FormControl,
// } from "@mui/material";
// const theme = createTheme();

// export default function PersonInfo() {
//   const navigate = useNavigate();
//   const params = useParams();
//   const [client, setclient] = useState([]);
//   const [clientprocess, setclientprocess] = useState([]);

//   // const loadclient = async () => {
//   //   const response = await fetch("http://localhost:4000/person/" + params.PRN_ID, {
//   //     headers: {
//   //       Authorization: localStorage.getItem("jwt"),
//   //     },
//   //   });
//   //   const data = await response.json();
//   //   setclient(data);
//   // };

//   // useEffect(() => {
//   //   loadclient();
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/personprocess/" + params.PRN_ID);
//         // const response = await fetch(
//         //   "http://localhost:4000/person/" + params.PRN_ID,
//         //   {
//         //     headers: {
//         //       Authorization: localStorage.getItem("jwt"),
//         //     },
//         //   }
//         // );
//         const data = await response.json();
//         setclientprocess(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(clientprocess)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:4000/person/" + params.PRN_ID,
//           {
//             headers: {
//               Authorization: localStorage.getItem("jwt"),
//             },
//           }
//         );
//         const data = await response.json();k
//         setclient(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const formattedBirthdate = dayjs(client.PRN_BRDAY).format("YYYY-MM-DD");
//   const formattedResidentdate = dayjs(client.PRN_D_PERM_RESIDENT).format("YYYY-MM-DD");
//   const formattedProcessdate = dayjs(clientprocess.PCS_DATE).format("YYYY-MM-DD");

//   return (
//     <>

//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <ButtonAppBar />

//       <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
//         <Paper
//           variant="outlined"
//           sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
//         >
//           <Typography component="h1" variant="h4" align="center">
//             Information about {client.PRN_NAME} {client.PRN_MIDDLENAME}{" "}
//             {client.PRN_LASTNAME}
//           </Typography>

//           <React.Fragment>
//             <Grid
//               container
//               spacing={3}
//               style={{ marginBottom: "20px", textAlign: "center" }}
//             >
//               <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
//                 <Typography>
//                   Name: {client.PRN_NAME} {client.PRN_LASTNAME}
//                 </Typography>
//                 <Typography>Middle Name: {client.PRN_MIDDLENAME}</Typography>
//                 <Typography>Birthdate: {formattedBirthdate}</Typography>
//                 <Typography>Birth Country: {client.PRN_BRCOUNTRY} </Typography>
//                 <Typography>Gender: {client.PRN_GENDER}</Typography>
//                 <Typography>
//                   Date Perm Resident: {formattedResidentdate}
//                 </Typography>
//                 <Typography>
//                   Country Citizenship: {client.PRN_COUNTRY_CITIZENSHIP}
//                 </Typography>
//                 <Typography>A-number: {client.PRN_A_NUM}</Typography>

//                 <Button
//                   variant="contained"
//                   color="inherit"
//                   sx={{ mt: 3, ml: 4 }}
//                   onClick={() => navigate(`/person/${params.PRN_ID}/edit`)}
//                 >
//                   Update
//                 </Button>
//               </Grid>
//               <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
//               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <Typography>ALL PROCESS</Typography>
//                 <Button
//                   variant="contained"
//                   color="inherit"
//                   sx={{ mt: 2, mb: 1 }}
//                   onClick={() => navigate(`/person/${params.PRN_ID}/newprocess`)}
//                 >
//                   New Process
//                 </Button>
//               </Box>

//                 {clientprocess.map((cliprocess) => (
//                   <Fragment key={cliprocess.PCS_ID}>
//                     <Card
//                       style={{
//                         marginBottom: ".1rem",
//                         backgroundColor: "#1e272e",
//                       }}
//                     >
//                       <CardContent
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <div
//                           style={{
//                             color: "white",
//                           }}
//                         >
//                           <Typography>
//                             {cliprocess.PCD_DESC} {" "}
//                             {formattedProcessdate} {" "}
//                             {cliprocess.STS_NAME}
//                           </Typography>
//                         </div>
//                         <div>

//                           {/* <Button
//                             variant="contained"
//                             color="inherit"
//                             onClick={() =>
//                               navigate(`/process/${params.PRN_ID}/${cliprocess.PCS_ID}/editprocess`)
//                             }
//                           >
//                             Edit
//                           </Button> */}

//                           <Button
//                             variant="contained"
//                             color="inherit"
//                             onClick={() =>
//                               navigate(`/process/${cliprocess.PCS_ID}/show`)
//                             }
//                           >
//                             Show
//                           </Button>


//                           {/* <Button
//                               variant="contained"
//                               color="warning"
//                               onClick={() => handleDelete(clients.PRN_ID)}
//                               style={{ marginLeft: ".5rem" }}
//                             >
//                               Delete
//                             </Button> */}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </Fragment>
//                 ))}

//               </Grid>
//             </Grid>
//           </React.Fragment>

//             <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//               <Button sx={{ mt: 3, ml: 1 }}>Back</Button>
//               <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
//                 Guardar
//               </Button>
//             </Box>
//         </Paper>
//       </Container>
//     </ThemeProvider>
//     </>
//   );
// }
