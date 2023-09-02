import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import injectContext from "./store/appContext";

import { Home } from "./views/home.jsx";
import { SpecificContact } from "./views/specificContact.jsx";
import { NewContact } from "./views/newContact.jsx";
import { EditContact } from "./views/editContact.jsx";

import { Navbar } from "./component/Navbar.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/Contactos">
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Navigate to="/" />} />
            <Route path="/new-contact" element={<NewContact />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
            <Route path="/contacts/:id" element={<SpecificContact />} />
            <Route
              path="*"
              element={<h1 className="text-center h1 fw-bold">Not found!</h1>}
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App);
