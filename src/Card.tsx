export default function Card(){

    const card = (image: any, title:string, text:string) => ({
        image, title,text
    })

    const data = [
        card("/icons/drop.svg", "Donor darah", "Cek ketersediaan donor darah atau mau donor darah"),
        card("/icons/box.svg", "Donasi uang", "Bantu teman - teman kita yang sedang mengalami kesulitan finansial"),
        card("/icons/stethoscope.svg", "Donasi alat medis","Bantu para nakes yang sedang berjuang melawan pandemi"),
        card("/icons/pills.svg", "Donasi Vitamin", "Bantu teman - teman kita yang sedang mengalami sakit"),
        card("/icons/syringe.svg", "Cek vaksinasi", "Cek ketersediaan vaksin dan lokasi vaksinasi di dekat lokasi anda"),
        card("/icons/truck.svg", "Ketersediaan ambulance", "Cek ketersediaan ambulan dan lokasi rumah sakit yang menyediakan")
    ]
    return(
        <div className="grid grid-cols-3 gap-6 text-center bg-mercury-500 border-transparent  mx-36">
        {data.map((item) => 
        <div className="flex flex-col bg-white-50  border-transparent rounded-lg shadow  p-7 ">
        <img className="h-10 m-4" src={item.image} alt=""/>
            <h5 className="text-center text-xl font-semibold text-black-500 mb-4">{item.title}</h5>
            <span className='font-normal tracking-wide text-center text-tundora-500 text-base'>{item.text}</span>
        </div>
        )
        }
        <button className='bg-blue-ribbon-500 text-white-500 rounded-lg mt-1 ml-[500px] font-normal w-[150px] h-10 text-sm'>
                    Load more
        </button>
     </div>
     

    )
}