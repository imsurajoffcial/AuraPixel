import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email is already in use
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({
                success: false,
                message: "Email is already registered. Please use a different email."
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
        };

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token, user: { name: user.name } });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Step 1: Validate input
        if (!email || !password) {
            return res.json({
                success: false,
                message: "Please provide both email and password.",
            });
        }

        // Step 2: Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({
                success: false,
                message: "No user found with this email.",
            });
        }

        // Step 3: Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid password. Please try again.",
            });
        }

        // Step 4: Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        // Step 5: Send success response
        return res.json({
            success: true,
            token,
            user: { name: user.name },
        });

    } catch (error) {
        console.error(error);
        return res.json({
            success: false,
            message: "An error occurred during login. Please try again.",
        });
    }
};


const userCredits = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);
        res.json({ success: true, credits: user.creditBalance, user: { name: user.name } });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


export {registerUser,loginUser, userCredits}