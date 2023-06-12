import { style } from "@vanilla-extract/css";
import { theme } from "@/theme/theme.css";

const { colors } = theme;

export const styles = {
  wrapper: style({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  date: style({
    fontWeight: "bold",
    fontSize: "1.2rem",
  }),
};
