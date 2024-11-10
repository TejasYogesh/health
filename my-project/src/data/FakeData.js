import { color } from "framer-motion";

const lineChartData = {
    datasets: [
        {
            label: "Steps - Tejas",
            data: [0, 2000, 3000, 4000, 5000, 6000, 7000],
            borderColor: "rgb(75,76,192)"
        },

        {
            label: "Steps - Veerendra",
            data: [1000, 4000, 3000, 5000, 5000, 1000, 4000],
            borderColor: "hotpink"
        },
    ],
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],

}

 

 
export default lineChartData;