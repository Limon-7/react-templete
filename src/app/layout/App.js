import { Redirect, Route } from "react-router-dom";

import AdminRoute from "./authenticateRoute/adminRoute";
import ProtectedRoute from "./authenticateRoute/protectedRoute";

import PublicPage from "../../features/publicPage";
import AdminPage from "../../features/adminPage";
import ProtectedPage from "../../features/protectedPage";
import AuthPage from "../../features/authPage";

import "./App.scss";
import Footer from "../../common/components/footer";
function App() {
  return (
    <div className="App">
      <Route path="/auth/signin" component={AuthPage} />
      <ProtectedRoute path="/user" component={ProtectedPage} />
      <AdminRoute path="/admin" component={AdminPage} />
      <Route path="/home" component={PublicPage} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Footer />
    </div>
  );
}

export default App;
