import jwt from 'jsonwebtoken'

//admin authentication middeleware 
const AuthAdmin =async (req,res,next)=>{
    try {
        const {atoken}=req.headers
        if(!atoken){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
       
        next()
    } catch (error) {
        console.log(error);
    res.json({success:false,message:error.message})
    }
}

export default AuthAdmin