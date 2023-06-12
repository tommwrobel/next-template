import { style } from "@vanilla-extract/css";
import { theme } from "@/theme/theme.css";

export const styles = {
  wrapper: style({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `solid 1px ${theme.colors.grey[200]}`,
    ":last-child": {
      borderBottom: 0,
    },
    padding: `${theme.spacing.big} 0`,
  }),

  title: style({
    color: theme.colors.textGrey.base,
    cursor: "pointer",
    ":hover": {
      textDecoration: "line-through",
      color: theme.colors.success.main,
    },
  }),

  actions: style({
    display: "flex",
    gap: theme.spacing.small,
    alignItems: "center",
  }),
};
