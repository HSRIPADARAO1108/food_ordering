import userModel from "../models/userModel.js";

// add to cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Add to Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
} 


const removeFromCart = async (req, res) => {
    // Function implementation
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0) {
            cartData[req.body.itemId]-=1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"removed From Cart"})}
     catch (error) {
        res.json({success:false,message:"Error"})
        
    }
}

const getCart = async (req, res) => {
    // Function implementation
    try {
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cartData
        res.json({success:true,cartData})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})

    }
}

export { addToCart, removeFromCart, getCart }
