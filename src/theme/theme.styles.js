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
    theme["backgroundColor"] = "#111";
    theme["color"] = "#fff";
    theme["buttonBackgroundColor"] = "#fff";
    theme["buttonFontColor"] = "#111";
    theme["menuColor"] = "#fff";
    theme["bannerTitle"] = "#fff";
  }

  function lightThemes() {
    theme["backgroundColor"] = "#fff";
    theme["color"] = "#111";
    theme["buttonBackgroundColor"] = "#111";
    theme["buttonFontColor"] = "#fff";
    theme["menuColor"] = "#111";
    theme["bannerTitle"] = "#111";
  }

  return theme;
};

export default themeType;
