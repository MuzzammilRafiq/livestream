import { Logo } from "@/components/navbar/logo";
import { Search } from "@/components/navbar/search";
import { Actions } from "@/components/navbar/actions";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};
export default NavBar;
