const User = require('../models/user.schema');

// Controller for user registration
const registerUser = async (req, res) => {
    try {
        const { mobile, password, email } = req.body;

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ mobile }, { email }] });
        if (existingUser) {
            return res.status(409).json({ message: 'Username or email already exists' });
        }

        // Create a new user
        const newUser = new User({
            mobile,
            password,
            email
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user object
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Controller for user loginUser
const loginUser = async (req, res) => {
    try {
      const { mobile, password } = req.body;
  
      // Check if the user exists in the database
      const existingUser = await User.findOne({ mobile, password });
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the provided password matches the user's password
    //   const passwordMatch = await existingUser.comparePassword(password);
    //   if (!passwordMatch) {
    //     return res.status(401).json({ message: 'Invalid password' });
    //   }
  
      // User authentication successful
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  };
  

module.exports = { registerUser, loginUser };
