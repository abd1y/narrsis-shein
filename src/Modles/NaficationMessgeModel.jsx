import toast from "react-hot-toast";

const Notifications=(mess,status)=>{


    

        if (status==="error"){
            toast.dismiss()
            toast.error(mess,
            {
                duration:3000,
                style:{
                    backgroundColor:"rgb(170, 19, 19)",
                    color:"white",
                    padding:"1vh",
                    userSelect:"none"
                }
            })
        }
        else if(status==="correct"){
            toast.dismiss()
            toast.success(mess,{
                  duration:3000,
                style:{
                    backgroundColor:"green",
                    color:"white",
                    padding:"1vh",
                    userSelect:"none"
                }
            })
        }
        else if(status==="Loding"){
            toast.dismiss()
toast.loading("الرجاء الانتظار",{
            duration:Infinity,
       
                style:{
                    backgroundColor:" rgb(202, 169, 4)",
                    color:"white",
                    padding:"1vh",
                    userSelect:"none"
                }
})
        }
    
 
    

   

    
  
   

  }

export default Notifications
