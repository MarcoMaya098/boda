import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// import { insertUser } from '../api/userApi';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {/* K show prro primos */}
//     </Typography>
//   );
// }

const theme = createTheme();

const SignIn = () =>{

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: ""
  // });

  // const { email, password } = inputs;

  // const onChange = e =>
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
              "http://localhost:4000/login",
              {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                  "Content-type": "application/json"
                }
              }
            );

      // const response = await axios.post('/api/login', { email, password });
      //localStorage.setItem('jwt', response.data.token);
      const responseData = await response.text()
      if(response.status >=300){
        // const errorNode= document.getElementById("error")
        // errorNode.innerHTML = responseData
      }else{
        //console.log(responseData)
        localStorage.setItem('jwt',`Bearer ${responseData}`)
        navigate('/person')
      }
      // localStorage.setItem('jwt',`Bearer ${responseData}`)
      // navigate.push('/tasks');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

    
  // }
  //   e.preventDefault();
  //   try {
  //     const body = { email, password };
  //     const response = await fetch(
  //       "http://localhost:4000/login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json"
  //         },
  //         body: JSON.stringify(body)
  //       }
  //     );

  //     const responseData = await response.text()
  //     console.log(response)
  //     if(response.status >=300){
  //       // const errorNode= document.getElementById("error")
  //       // errorNode.innerHTML = responseData
  //     }else{
  //       //console.log(responseData)
  //       localStorage.setItem('jwt',`Bearer ${responseData}`)
  //       navigate('/tasks')
  //     }

  //     // const parseRes = await response.json();
  //     // if (parseRes.jwtToken) {
  //     //   localStorage.setItem("token", parseRes.jwtToken);
  //     //   // setAuth(true);
  //     //   toast.success("Logged in Successfully");
  //     // } else {
  //     //   // setAuth(false);
  //     //   toast.error(parseRes);
  //     // }
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };


  //   const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const form = document.getElementById("form")
	// 	const formData = new FormData(form)
	// 	const data = Object.fromEntries(formData.entries())
  //   const r = await insertUser(data)
  //     if(r === true) navigate("/principal")
  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" id="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              // onChange={e => onChange(e)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              // onChange={e => onChange(e)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {error && <div>{error}</div>}
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item >
              <Link to="/register" variant="body2">
               {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;