import { Route } from "react-router-dom";

import AdminRoute from "./authenticateRoute/adminRoute";
import ProtectedRoute from "./authenticateRoute/protectedRoute";

import PublicPage from "../../features/publicPage";
import AdminPage from "../../features/adminPage";
import ProtectedPage from "../../features/protectedPage";
import { Signin, SignUp } from "../../features/authPage";

import "./App.scss";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={PublicPage} />
      <Route exact path="/auth/signin" component={Signin} />
      <Route exact path="/auth/signup" component={SignUp} />
      <ProtectedRoute path="/user" component={ProtectedPage} />
      <AdminRoute path="/admin" component={AdminPage} />
    </div>
  );
}

export default App;
