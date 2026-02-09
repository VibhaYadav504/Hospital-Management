import mongoose from "mongoose";
const dashboardSchema=new mongoose.Schema(
    {
        totalPatients:{
            type:Number,
            default:0,
        },
        totalDoctors:{
            type:Number,
            default:0,
        },
        appointmentsToday:{
            type:Number,
            default:0,
        },
       monthlyRevenue:{
    type: Number,
    default: 0,
},

       
    },
    {timestamps:true}
);
const Dashboard=mongoose.model("Dashboard",dashboardSchema);
export default Dashboard;