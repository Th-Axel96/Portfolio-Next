// CSS asideHeader template

export const styles = {
  // grid
  grid: {
    gridCol6: "xl:grid grid-cols-6",
    gridCol2: "md:grid md:grid-cols-2",
    colStart2: "col-start-2 col-span-5",
    colStart3: "col-start-3 col-span-5",
    lgGridCol3: "lg:grid lg:grid-cols-3",
  },
  //   flex
  flex: {
    justifyCenter: "flex justify-center",
    itemsEnd: "flex items-end",
    itemsCenter: "flex items-center",
  },

  fix: "fixed",

  //    aside
  aside: {
    divBitmoji: "pt-4 flex justify-center ",
    asideBg: "bg-gray-900 fixed w-80 h-screen border-r-2 border-blue-400",
    h2Name: "text-white text-4xl font-alice font-bold flex justify-center pt-8",
    navAside: "pl-8 text-xl font-alice text-gray-400",
    navIcon: "text-3xl mr-2",
    navLi: "my-8",
    HoverBlue:
      "transition duration-1000 ease-in-out hover:text-blue-400 focus:text-blue-400 active:text-blue-400",
    spanHover:
      "transition duration-1000 hover:-translate-y-2 hover:rotate-12 text-blue-400",
    // social icon
    socialIconBg:
      "w-10 h-10 my-10 bg-gray-600 rounded-full hover:bg-blue-400 hover:animate-pulse cursor-pointer ",

    socialIcon:
      "text-4xl text-white hover:transition hover:scale-110 hover:translate-x-1 hover:translate-y-1 hover:ease-in-out hover:duration-1000",
    copyrightIco: "text-lg text-blue-400 mr-2 ",
    copyrightDiv: "font-alice text-white flex items-center h-full xl:pl-24",
  },
  // text
  text: {
    fontBold: "font-bold",
    textWhite: "text-white",
  },

  // padding // margin
  mx4: "mx-4",

  // hidden block

  lgBlock: "hidden lg:block",
};
