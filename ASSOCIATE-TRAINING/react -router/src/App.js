import { Grid } from "@mui/material";
import "./App.css";
import Sidebar from "./components/Sidebar";
import RouteConfigs from "./components/router/RouteConfigs";

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={2} sm={2} md={2}> 
          <Sidebar />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <RouteConfigs />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
