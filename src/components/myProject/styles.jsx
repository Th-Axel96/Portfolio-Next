// content My Project

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
    justifyNameTyping: "h-5/6 flex flex-col justify-center items-center",
    colCenter: "flex flex-col justify-center xl:mr-32",
  },

  // background

  bgGLass:
    "w-5/12 h-40 bg-black/40 flex flex-col justify-center items-center rounded-full",

  // height
  hFull: "h-full",

  fix: "fixed",

  // padding // margin
  mx4: "mx-4",
  pt6: "pt-6",
  p6: "p-6",

  // container
  containerDiv: "mx-4 xl:ml-32",

  // contentHeader

  // hidden block

  lgBlock: "hidden lg:block",

  // BODY
  body: {
    title: "text-2xl text-indigo-800 uppercase font-open font-bold pt-16",
    borderTitle: "border-b-4 border-blue-400 w-20 mt-2 mb-8",
    paragraph: "font-open text-sm lg:text-xl font-semibold",
  },

  card: {
    contentCard:
      " rounded-lg shadow-lg bg-gray-300 max-w-xs mt-8 border-x border-gray-400 hover:bg-black hover:text-white ",
    titleProject:
      "uppercase flex justify-center text-xl font-open font-bold mb-4",
    paragraph:
      " text-center font-open text-sm lg:text-lg font-semibold border-y-2 border-gray-400 py-4 h-32 flex items-center",
    CardImg:
      "rounded-t-lg hover:scale-110 ease-in-out transition duration-1000",
    btnLink:
      " inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-sm lg:text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-1000 ease-in-out mt-6 hover:scale-110 ease-in-out",
    CardGrid: "lg:grid lg:grid-cols-3 md:grid md:grid-cols-2",
  },
};
