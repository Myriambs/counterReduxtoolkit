import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import{increment,decrement,reset}from './Redux/counterslice';

function App() {
 const Dispatch=useDispatch()
const {counter} = useSelector((state)=>state.counter)
  return (
    <ThemeProvider >
      <CssBaseline />
      <Container component={Box} py={4}>
        <Paper component={Box} p={3} align="center">
          <Typography align="center" variant="h1">
            {counter}
          </Typography>
          <Button onClick={()=>Dispatch(increment())} >Increment</Button>
          <Button onClick={()=>Dispatch(decrement())}>Decrement</Button>
         
          <Button onClick={()=>Dispatch(reset())}>
            reset
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;