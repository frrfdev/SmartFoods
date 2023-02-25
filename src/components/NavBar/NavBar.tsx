import React from "react";
import { Button } from "../Button/Button";
import { MdCategory, MdExitToApp, MdSpaceDashboard } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const router = useRouter();
  const { pathname } = router;
  const { handleLogout } = useAuthContext();

  const [isOpen, setIsOpen] = React.useState(false);

  const currentPage = pathname.split("/")?.[1] || "";

  const handleNavigateDashboard = () => {
    router.push("/dashboard");
    setIsOpen(false);
  };

  const handleNavigateProducts = () => {
    router.push("/products");
    setIsOpen(false);
  };

  const handleNavigateCategories = () => {
    router.push("/categories");
    setIsOpen(false);
  };

  const handleNavigateTerms = () => {
    router.push("/terms");
    setIsOpen(false);
  };

  const handleNavigateSettings = () => {
    router.push("/settings");
    setIsOpen(false);
  };

  const defaultNavBarClass =
    "items-left hidden w-min  list-none flex-col justify-between gap-5";
  const mobileNavBarClassOpened =
    "absolute block top-[58px] left-0 w-full h-full bg-white z-50";

  return (
    <div className="items-between fixed z-50 flex h-[58px] w-full justify-between bg-red-600 p-2 text-white lg:h-[92px] lg:w-full lg:flex-row lg:items-center lg:justify-between lg:bg-white lg:p-5 ">
      <span className="block lg:hidden">
        <Button size="sm" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={20} />
        </Button>
      </span>
      <span className="items-left flex flex-row items-center gap-2 overflow-hidden text-gray-700 lg:items-center">
        <div className="hidden h-10 w-10 rounded-full bg-red-600 lg:block" />
        <div className="font-bold text-white lg:text-gray-800">Pizzaria JS</div>
      </span>

      <ul
        className={`lg:items-left lg:relative lg:top-0 lg:flex lg:w-min lg:list-none lg:flex-row lg:justify-between lg:gap-5 ${
          isOpen ? mobileNavBarClassOpened : defaultNavBarClass
        } `}
      >
        <Button
          stretch={isOpen}
          isActive={currentPage === "dashboard"}
          status="secondary"
          onClick={handleNavigateDashboard}
        >
          <MdSpaceDashboard />
          <span>Dashboard</span>
        </Button>
        <Button
          stretch={isOpen}
          isActive={currentPage === "products"}
          status="secondary"
          onClick={handleNavigateProducts}
        >
          <GoBell />
          <span>Produtos</span>
        </Button>
        <Button
          status="secondary"
          stretch={isOpen}
          onClick={handleNavigateCategories}
          isActive={currentPage === "categories"}
        >
          <MdCategory />
          <span>Categorias</span>
        </Button>
        <Button
          stretch={isOpen}
          status="secondary"
          onClick={handleNavigateTerms}
          isActive={currentPage === "terms"}
        >
          <BiTime />
          <span>Termos</span>
        </Button>
        <Button
          status="secondary"
          onClick={handleNavigateSettings}
          isActive={currentPage === "settings"}
          stretch={isOpen}
        >
          <RiSettings3Fill />
          <span>Configurações</span>
        </Button>
      </ul>

      <span>
        <Button status="secondary" size="sm" onClick={handleLogout}>
          <MdExitToApp size={20} />
        </Button>
      </span>
    </div>
  );
};
