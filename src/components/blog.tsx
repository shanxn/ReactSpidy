import MemberCard from "./memberCard"
import gwen from "../assets/spider-gwen-gwen-2560x2560-10014.jpg"
import miles from "../assets/miles-morales-leap-2048x2048-20891.png"
import lilo from "../assets/lilo-stitch-marvel-2560x2560-22077.jpg"

let heros = [
  ["Gween", "SoulMate", gwen],
  ["me", "The-Cool-Guy", miles],
  ["Lilo", "BOSS", lilo],
]

const Blogs = () => {
  return (
    <div id="blogPage" className="flex flex-col items-center md:h-200 h-fit w-full bg-white">
      <div className="text-black font-bold flex gap-2 md:text-4xl md:py-10 py-5 text-2xl">
        MY <div className="text-red-500">VASSAL</div>
      </div>
      <div className="h-1 w-1/3 bg-black/20"></div>

      <div className="md:w-full w-full flex md:flex-row flex-col gap-10 h-full items-center md:justify-evenly p-10">
        {heros.map(([name, role, link]) => (
          <MemberCard key={name} img={link} name={name} role={role} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
