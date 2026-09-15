import Customer from "../model/customerModel.js";

// Create and save a new customer
export const createCustomer = async (req, res) => {
    try {
        const { name, email, phoneNumber, companyName, status } = req.body;

        // Check for existing customer with the same email
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(409).json({
                success: false,
                message: "A customer with this email already exists",
            });
        }

        const customer = await Customer.create({
            name,
            email,
            phoneNumber,
            companyName,
            status,
        });

        return res.status(201).json({
            success: true,
            message: "Customer created successfully",
            data: customer,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in creating customer",
            error: err.message,
        });
    }
};

// to get all customers list
export const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: customers.length,
            data: customers,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error fetching customers",
            error: err.message,
        });
    }
};

// Update customer details
export const updateCustomer = async (req, res) => {
    try {
        // id will come from the mongodb database as each customer has a unique id
        const { id } = req.params;

        // new: true returns the updated document
        const updatedCustomer = await Customer.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedCustomer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            data: updatedCustomer,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error updating customer",
            error: err.message,
        });
    }
};

// Delete a customer
export const deleteCustomer = async (req, res) => {
    try {
        // id will come from the mongodb database as each customer has a unique id
        const { id } = req.params;
        const deletedCustomer = await Customer.findByIdAndDelete(id);

        if (!deletedCustomer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error deleting customer",
            error: err.message,
        });
    }
};