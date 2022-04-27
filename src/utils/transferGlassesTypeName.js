/** @format */

export const transferClassesTypeName = ({ type, color }) => {
  const curColor = color
    ?.split(" ")
    .reduce(
      (acc, txt, index) =>
        acc +
        (index === 0
          ? txt.toLowerCase()
          : txt.split("")[0].toUpperCase() + txt.slice(1)),
      ""
    );
  const curType = type?.toLowerCase();

  return { curColor, curType };
};
