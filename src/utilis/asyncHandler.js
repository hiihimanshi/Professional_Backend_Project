// promises
const asyncHandler = (requestHandler) =>{
    (requestHandler) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


// try catch
// const asyncHandler = (fun)  => async() => {
//     try{
//         await fun(req,res,next)
//     }
//     catch(err){
//         res.status(err.code || 404).json({
//             success:true,
//             message:err.message,
//         })
//     }
// }

export default asyncHandler