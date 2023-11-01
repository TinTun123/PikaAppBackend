import React from 'react';
import AdminSideBar from "./AdminSideBar.jsx";

const AdminLayout = (children) => {


    return (
        <AdminSideBar children={children} />
    );
};

export default AdminLayout;
