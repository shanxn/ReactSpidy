import Card from "./card"
let nums = [1,2,3]
const Services = () =>{
    return(
        <div id='servicePage' className='flex flex-col items-center md:h-200 h-300 w-full bg-white'>
            <div className="text-black font-bold md:text-4xl md:py-10 py-5 text-2xl">Our Services</div>
            <div className="h-1 w-1/3 bg-black/20"></div>

            <div className="md:w-full w-full flex md:flex-row flex-col gap-10 h-full items-center md:justify-evenly p-10">
                {nums.map((key) => <Card num={key}/>)}
            </div>
           
        </div>
    )
}
export default Services