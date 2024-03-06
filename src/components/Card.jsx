import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const { name, picture } = user;

  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate("/user/" + name);
  };

  return (
    <div className="w-80 h-36 shadow-lg flex items-center justify-evenly bg-slate-700 rounded-3xl">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <img className=" w-full h-full object-cover" src={picture.large} />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white">
          {name.first} {name.last}
        </h2>
        <button
          className="px-5 py-2 bg-red-500 rounded-lg text-white cursor-pointer transition-all duration-300 hover:bg-red-400"
          onClick={() => handleClick(name.first)}
        >
          PROFILE +
        </button>
      </div>
    </div>
  );
};

export default Card;
