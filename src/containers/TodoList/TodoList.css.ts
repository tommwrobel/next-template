import { style } from "@vanilla-extract/css";
import { theme } from "@/theme/theme.css";

export const styles = {
  wrapper: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.big,
  }),

  todosWrapper: style({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }),
};
