interface probs {
    num : number
}
const Card = ({num}: probs) => {
    return(
        <>
        <div className="flex flex-col hover:scale-110 duration-300 gap-10 md:w-1/5 shadow-2xl w-1/2 rounded-b-4xl h-3/5 bg-black/20 p-10">
            <div className="h-1/6 md:w-1/5 w-2/7 bg-white rounded-b-4xl text-red-400 font-bold text-center text-2xl">{num}</div>
            <div className="font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto at quibusdam sequi numquam nemo? Culpa quod unde iste tempora.</div>
        </div>
        </>
        
    )

}
export default Card