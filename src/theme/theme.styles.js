/** @format */

const themeType = (darkTheme) => {
  const theme = {
    backgroundColor: "",
    color: "",
    buttonBackgroundColor: "",
    buttonFontColor: "",
    menuColor: "",
    bannerTitle: "",
  };
  darkTheme === "darkTheme" ? darkThemes() : lightThemes();

  function darkThemes() {
    theme["backgroundColor"] = "#161616";
    theme["color"] = "#fff";
    theme["buttonBackgroundColor"] = "#fff";
    theme["buttonFontColor"] = "#161616";
    theme["menuColor"] = "#fff";
    theme["bannerTitle"] = "#fff";
  }

  function lightThemes() {
    theme["backgroundColor"] = "#fff";
    theme["color"] = "#161616";
    theme["buttonBackgroundColor"] = "#161616";
    theme["buttonFontColor"] = "#fff";
    theme["menuColor"] = "#161616";
    theme["bannerTitle"] = "#161616";
  }

  return theme;
};

export default themeType;
