// Burger menu mobile

export const styles = {
  // grid
  grid: {
    gridCol6: "grid grid-cols-6",
    colStart2: "col-start-2 col-span-5",
  },
  //   flex
  flex: {
    justifyCenter: "flex justify-center",
    itemsEnd: "flex items-end",
    itemsCenter: "flex items-center",
    justifyColItemsCenter: "flex flex-col justify-center items-center",
    justifyEnd:"flex justify-end",
  },

  offCanvaMenuBurger:
    "  fixed bottom-0  bg-gray-600 z-20 bg-clip-padding shadow-sm outline-none transition duration-1000 ease-in-out text-gray-700 top-0 left-0 border-none w-80",

  // background

  bgGLass:
    "w-5/12 h-40 bg-black/40 flex flex-col justify-center items-center rounded-full",

  // height
  hFull: "h-full",

  //    aside
  aside: {
    divBitmoji: "flex justify-center ",
    asideBg: "bg-gray-900 w-80 h-screen",
    h2Name:
      "text-white text-3xl  font-alice font-bold  flex justify-center py-8",
    navAside: "pl-8 text-xl font-alice text-gray-400",
    navIcon: "text-3xl mr-2",
    navLi: "py-8",
    HoverBlue: "hover:text-blue-400 transition duration-1000 ease-in-out",
    spanHover:
      "transition duration-1000 hover:-translate-y-2 hover:rotate-12 text-blue-400",
    // social icon
    socialIconBg:
      "w-12 h-12 bg-gray-600 rounded-full hover:bg-blue-400 hover:animate-pulse",
    socialIcon:
      "text-3xl text-white transition duration-1000 hover:translate-y-2 hover:translate-x-2",
    copyrightIco: "text-lg text-white",
    copyrightDiv: "h-20 text-white",
    // burger menu mobile
    burgerIco: "h-14 flex items-center pl-4 text-blue-400",
    clearBurgerIco: "flex justify-center items-center h-12 w-12 text-white",
  },

  // text
  text: {
    fontBold: "font-bold",
    textWhite: "text-white",
  },

  // padding // margin
  mx4: "mx-4",
  mb8: "mb-8",
  marginIcoCLear: "mt-2 mr-2",
  paddingIcoMenu: "ml-4 mt-4",

  // contentHeader

  contentHeader: {
    bgHeader: "bg-person-coding bg-cover bg-no-repeat",
    bgBlur: " h-screen w-full",
    nameHeader: "text-white text-5xl font-alice font-bold",
    spanTyping:
      "flex text-white font-alice text-3xl border-b-2 border-blue-400 pt-4",
    btnEncre: "flex justify-center items-end text-white -mt-40 animate-bounce",
  },

  // hidden block

  lgBlock: "hidden lg:block",
};
