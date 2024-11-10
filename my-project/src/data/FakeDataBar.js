import { color } from "framer-motion";

const BarData = {

    labels: [
        "Math",
        "Science",
        "English",
        "Social",
        "Geography",

    ],
    datasets: [
        {
            label: "Marks - Tejas",
            data: [80, 2000, 3000, 4000, 500],
            backgroundColor: ["skyblue" , "red" , "orange" , "blue" , "violet"],
            borderColor: "red",
            borderwidth: 1,

        }
    ]

}





export default BarData;