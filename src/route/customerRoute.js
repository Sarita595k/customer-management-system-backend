import express from "express"
import { createCustomer, deleteCustomer, getAllCustomers, updateCustomer } from "../controller/customerController.js"
const route = express.Router()

// route for create a customer
route.post("/create", createCustomer)

// route to get the list of all the customers 
route.get("/getAll", getAllCustomers)
// route for update a customer 
route.put("/update/:id", updateCustomer)

// route to detete a customer
route.delete("/delete/:id", deleteCustomer)

export default route