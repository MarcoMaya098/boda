// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Container } from "@mui/material";
// // import Tabs from '@mui/material/Tabs';
// // import Tab from '@mui/material/Tab';

// import { useNavigate, Link } from "react-router-dom";

// export default function ButtonAppBar() {
//   const navigate = useNavigate();

//   const checkLogOut = ()=> localStorage.removeItem('jwt')

//   // const gotoLogin=(e)=>{
//   //     e.preventDefault()
//   //     checkLogOut()
//   //     navigate('/')
//   // }

//   const gotoLogin = (e) => {
//     e.preventDefault()
//     checkLogOut()
//     navigate('/')
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" color="transparent">
//         <Container>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               <Link to="/person" style={{ textDecoration: "none", color: '#aaa'}}>
//                 APPLICATIONS
//               </Link>
//             </Typography>

//             {/* <Tabs
//               textColor="secondary"
//               // indicatorColor="secondary"
//               aria-label="secondary tabs example"
//             >
//               <Tab label="Item One" component={Link} to="/tasks" />
//               {/* <Tab label="Item One" component={Link} to="/tasks" />
//               <Tab label="Item One" component={Link} to="/tasks" /> 
//               <Tab label="Client" component={Link} to="/client" />
//             </Tabs> */}
//            <Button  
//               sx={{ mr: 2 }}
//               variant="contained"
//               color="primary"
//               onClick={() => navigate("/editar")}
//             >
//               Edit
//             </Button>

//             <Button  
//               sx={{ mr: 2 }}
//               variant="contained"
//               color="primary"
//               onClick={() => navigate("/page1")}
//             >
//               Ver mas
//             </Button>
//             <Button  
//               sx={{ mr: 2 }}
//               variant="contained"
//               color="primary"
//               onClick={() => navigate("/client")}
//             >
//               Client
//             </Button>

//             {/* <Button  
//               variant="contained"
//               color="primary"
//               onClick={() => navigate("/tasks")}
//             >
//               Task
//             </Button> */}

//             <Button  
//               variant="contained"
//               color="primary"
//               onClick={gotoLogin}
//             >
//               Log Out
//             </Button>

            
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }
