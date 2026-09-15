import express from "express"
import { createCustomer, deleteCustomer, getAllCustomers, updateCustomer } from "../controller/customerController.js"
const route = express.Router()

// route for create a customer /api/customer/create
route.post("/create", createCustomer)

// route to get the list of all the customers  /api/customer/getAll
route.get("/getAll", getAllCustomers)

// route for update a customer /api/customer/update/id
route.put("/update/:id", updateCustomer)

// route to detete a customer /api/customer/delete/id
route.delete("/delete/:id", deleteCustomer)

export default route