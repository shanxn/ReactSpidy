
function NavBar() {
  let pages = new Map<string, string>([
    ["HOME", "homePage"],
    ["ABOUT", "aboutPage"],
    ["SERVICES", "servicePage"],
    ["BLOG", "blogPage"],
    ["CONTACT", "CONTACT"],
  ]);
  return (
    <div className=' flex w-screen bg-transparent self-start justify-center py-10'>
        <div className="fixed z-50  md:w-2/3 h-15 w-9/10 flex flex-row text-black/50 justify-center font-bold text-sm rounded-full gap-5 bg-white ">
      {Array.from(pages).map(([key, value]) => (
        <div
          className="cursor-pointer  hover:border-b-1 hover:text-red-500 border-red-500 place-content-center"
          onClick={() => {

            const element = document.getElementById(value);
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            {key}
          </div>
      ))}
    </div>
    </div>
    
  );
}
export default NavBar;
