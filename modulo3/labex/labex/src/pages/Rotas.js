import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "./AdminHomePage/AdminHomePage";
import { ApplicationFormPage } from "./ApplicationFormPage/ApplicationFormPage";
import { CreateTripPage } from "./CreateTripPage/CreateTripPage";
import { HomePage } from "./HomePage/HomePage";
import { LisTripsPage } from "./ListTrips/ListTripsPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { PageError } from "./PageError/Error";
import { TripDetailsPage } from "./TripDetailsPage/TripDetailsPage";

import { ToastContainer } from "react-toastify";


export const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<LisTripsPage/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
                <Route path="*" element={<PageError/>}/>
            </Routes>
        </BrowserRouter>
    )
}