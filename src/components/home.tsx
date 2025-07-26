import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxFill,
  RiTwitterLine,
  RiAliensFill,
} from "@remixicon/react";

import { useEffect, useRef, useState } from "react";
let icons = [RiInstagramLine, RiGithubLine, RiLinkedinBoxFill, RiTwitterLine];
interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}
const Home = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [, setDots] = useState<Dot[]>([]);
  const arrayColors = "white";

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    if (!canvas || !banner) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };

    resizeCanvas();

    const generateDots = (): Dot[] => {
      const newDots: Dot[] = [];
      for (let i = 0; i < 50; i++) {
        newDots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors,
        });
      }
      return newDots;
    };

    const drawDots = (dotsArray: Dot[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsArray.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    let currentDots = generateDots();
    setDots(currentDots);
    drawDots(currentDots);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = banner.getBoundingClientRect();
      const mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      drawDots(currentDots);
      currentDots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      drawDots(currentDots);
    };

    const handleResize = () => {
      resizeCanvas();
      currentDots = generateDots();
      setDots(currentDots);
      drawDots(currentDots);
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="homePage"
        ref={bannerRef}
        className="relative cursor-[url(src/assets/Spiderman Logo Trace.jpg)] w-full h-screen flex flex-col justify-center text-5xl font-bold items-center"
      >
        <canvas
          ref={canvasRef}
          id="dotsCanvas"
          className="pointer-events-none z-0 absolute top-0 left-0 w-full h-full z-0"
        ></canvas>

        <div className="relative flex flex-col h-full justify-center text-left w-fit">
          <div>HI, I'M</div>
          <div className="text-7xl flex items-center justify-center gap-15 font-bold">
            <div className="self-start">SPIDY</div>
            <div
              onClick={() => {
                const element = document.getElementById("aboutPage");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <RiAliensFill size={65} />
            </div>
          </div>

          <div className=" flex gap-10 py-5">
            {icons.map((Icon, index) => (
              <div className=" border-white ">
                <Icon
                  className="hover:scale-150 duration-300 "
                  key={index}
                  size={50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
