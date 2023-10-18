import { AiOutlineLeft, AiOutlineRight, AiOutlineUp } from "react-icons/ai";

function ArrowButton({ type, onClick }) {
  let arrow;

  switch (type) {
    case "left":
      arrow = <AiOutlineLeft />;
      break;
    case "right":
      arrow = <AiOutlineRight />;
      break;
    case "up":
      arrow = <AiOutlineUp />;
      break;
    default:
      arrow = null;
  }

  return (
    <div
      className="rounded-full border-[2px] border-[#454247] p-5 lg:p-7 text-white text-sm lg:text-xl bg-transparent hover:bg-[#00FFE3] hover:text-black transition duration-300"
      onClick={onClick} // Set the onClick handler here
    >
      {arrow}
    </div>
  );
}

export default ArrowButton;
