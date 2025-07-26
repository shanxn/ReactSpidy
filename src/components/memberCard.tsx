interface probs {
  img: string;
  name: string;
  role: string;
}
const MemberCard = ({ img, role, name }: probs) => {
  return (
    <>
      <div className="flex flex-col hover:scale-110 duration-300 md:w-1/7 shadow-2xl w-1/2 rounded-b-4xl gap-2 h-3/5 bg-black/20 p-10">
        <img
          className="rounded-2xl bg-cover mx-3 bg-center bg-no-repeat h-6/7 w-9/10"
          src={img}
        ></img>

        <div className="font-bold text-2xl">{name}</div>
        <div className="text-md font-italic text-red-400">{role}</div>
      </div>
    </>
  );
};
export default MemberCard;
