import { Outlet } from "react-router-dom";

import Footer from "../componets/Footer";
import Navigation from "../componets/Navigation";
import { AuthProvider } from "../context/AuthContext";

export default function DefaultLayout() {
  return (
    <AuthProvider value={{ user }}>
      <Navigation />

      <Outlet />

      <Footer />
    </AuthProvider>
  );
}
