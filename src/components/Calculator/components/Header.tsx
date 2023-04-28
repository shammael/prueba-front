import UserLogo from "@/assets/images/User";

const Header = () => {
  return (
    <div className="flex justify-center gap-4">
      <h1 className="text-2xl text-white text-center">Welcome</h1>
      <UserLogo className="h-10 w-10" />
    </div>
  );
};

export default Header;
