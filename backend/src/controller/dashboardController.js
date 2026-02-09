import Dashboard from "../models/Dashboard.js";
export const getDashboardStats=async (req,res)=>{
    try{
        let stats= await Dashboard.findOne();
        if(!stats){
            stats={
                totalPatients:0,
                totalDoctors:0,
                appointmentsToday:0,
                monthlyRevenue:0,
            };

        }
        res.status(200).json({
            success:true,
            data:stats,
        });
    } catch (error){
        res.status(500).json({
            success:false,
            message:"Failed to fetch dashboard data",
            error:error.message,
        });
    }
};