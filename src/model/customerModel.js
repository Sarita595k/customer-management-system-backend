import mongoose from "mongoose";

// create the schema to get details from customer
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
        },
        companyName: {
            type: String,
            required: [true, "Company name is required"],
            trim: true,
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "inactive",
        },
    },
    {
        // add the createdAt and updatedAt time 
        timestamps: true,
    }
);

// creating the model for the customer schema
const Customer = mongoose.model("Customer", customerSchema);
export default Customer;