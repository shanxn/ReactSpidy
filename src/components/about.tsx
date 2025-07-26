
import spiderman from '../assets/spider-man-across-8000x4500-10138.png';
const About = () => {
  return (
    <div
      id="aboutPage"
      className="flex flex-row items-center md:h-300 h-200 w-full justify-evenly bg-white/30"
    >
      <div style={{ backgroundImage: `url(${spiderman})` }} className="md:w-1/4 shadow-2xl w-3/7 md:h-2/4 h-2/7 rounded-2xl bg-center bg-cover mx-10 "></div>
      <div className="flex w-2/4 gap-2 flex-col items-center">
        <div className="text-white w-full flex justify-center gap-2 font-bold md:text-4xl text-xl">
          ABOUT <div className="text-red-500">ME</div>
        </div>
        <div className="h-1 w-1/3 bg-white"></div>
        <p className="text-black w-full font-italic md:text-2xl text-md md:p-10 p-5 text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo facilis
          itaque dignissimos reiciendis animi recusandae magni velit incidunt,
          delectus earum minima amet sunt et aliquam ipsum in! Sequi provident
          praesentium tempore culpa. Aperiam commodi delectus neque tenetur
          minus architecto pariatur corporis dolor, dolorem culpa, fugit
          adipisci ullam, fuga sapiente perferendis.
        </p>
        <div className="outline-3 bg-black hover:text-red-300 font-bold self-start hover:scale-110 duration-300 md:mx-10 mx-5 self-center outline-offset-1 py-4 px-5 rounded-2xl appearance-none focus:outline-offset-2 shadow-xl drop-shadow-xl outline-red-500">
          Spidy Call
        </div>
      </div>
    </div>
  );
};
export default About;
