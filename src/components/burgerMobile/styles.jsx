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
  },

  offCanvaMenuBurger:
    "offcanvas offcanvas-start  fixed bottom-0  bg-gray-600 invisible bg-clip-padding shadow-sm outline-none transition duration-1000 ease-in-out text-gray-700 top-0 left-0 border-none w-80",

  // background

  bgGLass:
    "w-5/12 h-40 bg-black/40 flex flex-col justify-center items-center rounded-full",

  // height
  hFull: "h-full",

  //    aside
  aside: {
    divBitmoji: " flex justify-center ",
    asideBg: "bg-gray-900 w-80 h-screen",
    h2Name:
      "text-white text-3xl  font-open font-bold  flex justify-center py-8",
    navAside: "pl-8 text-xl text-gray-400",
    navIcon: "text-3xl mr-2",
    navLi: "py-8",
    HoverBlue: "hover:text-blue-400 transition duration-1000 ease-in-out",
    // social icon
    socialIconBg:
      "w-12 h-12 bg-gray-600 rounded-full hover:bg-blue-400 hover:animate-pulse",
    socialIcon: "text-3xl text-white",
    copyrightIco: "text-lg text-white",
    copyrightDiv: "h-20 text-white",
    // burger menu mobile
    burgerIco: "text-5xl text-black",
    clearBurgerIco: " text-4xl text-white",
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
  paddingIcoMenu: "pl-4 pt-4",

  // contentHeader

  contentHeader: {
    bgHeader: "bg-person-coding bg-cover bg-no-repeat",
    bgBlur: " h-screen w-full",
    nameHeader: "text-white text-5xl font-open font-bold",
    spanTyping:
      "flex text-white font-open text-3xl border-b-2 border-blue-400 pt-4",
  },

  // hidden block

  lgBlock: "hidden lg:block",
};
