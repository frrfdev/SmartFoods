export const variants = {
  default: {
    root: " grow basis-[350px] border-2 border-gray-50 cursor-pointer",
    imgWrapper: "relative h-[250px] bg-red-600",
    detailsButton:
      "absolute right-3 top-3 cursor-pointer rounded-full border-2 border-transparent bg-white p-3 text-gray-400 transition duration-300 hover:border-2 hover:border-red-600 hover:text-red-600",
    infoContainer: "flex flex-col p-5",
    details: "flex flex-col gap-2 text-sm text-gray-400",
    priceContainer: "mt-2 flex items-start gap-1",
    promotionalPrice: "text-sm text-gray-400 line-through",
    productName: "",
    finalPrice: "",
  },
  cart: {
    root: "flex max-w-[350px]",
    imgWrapper:
      "relative h-[150px] w-[150px] bg-red-600 rounded-lg overflow-hidden",
    detailsButton: "hidden",
    infoContainer: "flex flex-col p-5",
    details: "hidden",
    priceContainer: "mt-2 flex flex-col items-start gap-0",
    promotionalPrice: "text-sm text-gray-400 line-through",
    productName: "text-xl uppercase",
    finalPrice: "text-xl font-bold text-red-600",
  },
  preview: {
    root: "flex w-full gap-4",
    imgWrapper:
      "relative h-[250px] min-w-[250px] bg-red-600 rounded-lg overflow-hidden",
    detailsButton: "hidden",
    infoContainer: "flex flex-col p-5",
    details: "flex flex-col gap-2 text-sm text-gray-400",
    priceContainer: "mt-2 flex items-start gap-4",
    promotionalPrice: "text-xl text-gray-400 line-through",
    productName: "text-2xl uppercase font-bold",
    finalPrice: "text-2xl font-bold text-black",
  },
};
