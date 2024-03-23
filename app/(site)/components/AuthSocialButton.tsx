import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
      flex
      justify-center
      rounded-xl
      px-2
      py-2
      text-sm
      font-semibold
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2 
      w-44
      opacity-60 cursor-default
      bg-gray-400 hover:bg-skyblue focus-visible:outline-skyblue
    "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
