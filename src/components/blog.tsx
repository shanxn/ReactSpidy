import MemberCard from "./memberCard"

let heros = [
  ["Gween", "SoulMate", "src/assets/spider-gwen-gwen-2560x2560-10014.jpg"],
  ["me", "The-Cool-Guy", "src/assets/miles-morales-leap-2048x2048-20891.png"],
  ["Lilo", "BOSS", "src/assets/lilo-stitch-marvel-2560x2560-22077.jpg"],
]
const Blogs = () =>{
    return(
        <div id='blogPage' className='flex flex-col items-center md:h-200 h-300 w-full bg-white'>
            <div className="text-black font-bold flex gap-2 md:text-4xl md:py-10 py-5 text-2xl">MY <div className="text-red-500">VASSAL</div></div>
            <div className="h-1 w-1/3 bg-black/20"></div>

            <div className="md:w-full w-full flex md:flex-row flex-col gap-10 h-full items-center md:justify-evenly p-10">
                {Array.from(heros).map(([name, role, link]) => (<MemberCard img={link} name={name} role={role}/>))}
            </div>
           
        </div>
    )
}
export default Blogs