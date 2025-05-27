import syringe from '../Assets/syringe.png'
import eye from '../Assets/eye.png'
import heart from '../Assets/heart.png'
import doctor from '../Assets/doctor.png'
const upcomingSchedule = [
    {
        day: "Thursday",
        schedule: [
            {
                event: "Health checkup complete",
                img: syringe,
                time: "11:00 AM",
            },
            {
                event: "Ophthalmologist",
                img: eye,
                time: "14:00 PM",
            },

        ]
    },
    {
        day: "Saturday",
        schedule: [
            {
                event: "Cardiologist",
                img: heart,
                time: "12:00 AM",
            },
            {
                event: "Neurologist",
                img: doctor,
                time: "16:00 PM",
            },

        ]
    },
    // {
    //     event: "Health checkup complete",
    //     img: 'img',
    //     time: "11:00 AM",
    // },
    // {
    //     event: "Ophthalmologist",
    //     img: 'img',
    //     time: "14:00 PM",
    // },


    // {
    //     event: "Cardiologist",
    //     img: 'img',
    //     time: "12:00 AM",
    // },
    // {
    //     event: "Neurologist",
    //     img: 'img',
    //     time: "16:00 PM",
    // },
]

export default upcomingSchedule;