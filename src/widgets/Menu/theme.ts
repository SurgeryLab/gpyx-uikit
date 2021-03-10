import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme, PanelTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.nav,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.nav,
  hover: "#473d5d",
};
export const lightPanel: PanelTheme = {
  background: lightColors.panel,
};

export const darkPanel: PanelTheme = {
  background: darkColors.panel,
};
