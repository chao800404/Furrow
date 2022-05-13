/** @format */

export const transferClassesTypeName = ({ type, color }) => {
  const curColor = color?.toLowerCase().split(" ").join("-");
  const curType = type?.toLowerCase();

  return { curColor, curType };
};
