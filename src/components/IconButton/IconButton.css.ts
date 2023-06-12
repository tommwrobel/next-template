import { recipe } from "@vanilla-extract/recipes";
import { theme } from "@/theme/theme.css";
import { styleVariants } from "@vanilla-extract/css";

const { colors, borderRadius } = theme;

const colorVariants = styleVariants({
  primary: {
    backgroundColor: colors.primary.main,
    borderColor: colors.primary.main,
    color: colors.primary.contrastText,
    ":hover": {
      backgroundColor: colors.primary.dark,
      borderColor: colors.primary.dark,
    },
  },
  success: {
    backgroundColor: colors.success.main,
    borderColor: colors.success.main,
    color: colors.success.contrastText,
    ":hover": {
      backgroundColor: colors.success.dark,
      borderColor: colors.success.dark,
    },
  },
  warning: {
    backgroundColor: colors.warning.main,
    borderColor: colors.warning.main,
    color: colors.warning.contrastText,
    ":hover": {
      backgroundColor: colors.warning.dark,
      borderColor: colors.warning.dark,
    },
  },
  error: {
    backgroundColor: colors.error.main,
    borderColor: colors.error.main,
    color: colors.error.contrastText,
    ":hover": {
      backgroundColor: colors.error.dark,
      borderColor: colors.error.dark,
    },
  },
});
const variantVariants = styleVariants({
  contained: {
    border: 0,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    ":hover": {
      backgroundColor: "transparent",
    },
  },
  ghost: {
    backgroundColor: "transparent",
    border: 0,
    ":hover": {
      backgroundColor: "transparent",
      border: 0,
    },
  },
});
const sizeVariants = styleVariants({
  small: {
    width: 24,
    height: 24,
    fontSize: 14,
  },
  medium: {
    width: 30,
    height: 30,
    fontSize: 16,
  },
  large: {
    width: 36,
    height: 36,
    fontSize: 20,
  },
});

export const styles = recipe({
  base: {
    borderRadius: borderRadius.full,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ":hover": {
      transform: "scale(110%)",
    },
    ":active": {
      transform: "scale(100%)",
    },
  },

  variants: {
    color: colorVariants,
    variant: variantVariants,
    size: sizeVariants,
  },

  compoundVariants: [
    {
      variants: {
        color: "primary",
        variant: "outlined",
      },
      style: {
        color: colors.primary.main,
        ":hover": {
          color: colors.primary.dark,
        },
      },
    },
    {
      variants: {
        color: "success",
        variant: "outlined",
      },
      style: {
        color: colors.success.main,
        ":hover": {
          color: colors.success.dark,
        },
      },
    },
    {
      variants: {
        color: "warning",
        variant: "outlined",
      },
      style: {
        color: colors.warning.main,
        ":hover": {
          color: colors.warning.dark,
        },
      },
    },
    {
      variants: {
        color: "error",
        variant: "outlined",
      },
      style: {
        color: colors.error.main,
        ":hover": {
          color: colors.error.dark,
        },
      },
    },

    {
      variants: {
        color: "primary",
        variant: "ghost",
      },
      style: {
        color: colors.primary.main,
        ":hover": {
          color: colors.primary.dark,
        },
      },
    },
    {
      variants: {
        color: "success",
        variant: "ghost",
      },
      style: {
        color: colors.success.main,
        ":hover": {
          color: colors.success.dark,
        },
      },
    },
    {
      variants: {
        color: "warning",
        variant: "ghost",
      },
      style: {
        color: colors.warning.main,
        ":hover": {
          color: colors.warning.dark,
        },
      },
    },
    {
      variants: {
        color: "error",
        variant: "ghost",
      },
      style: {
        color: colors.error.main,
        ":hover": {
          color: colors.error.dark,
        },
      },
    },

    {
      variants: {
        size: "small",
        variant: "ghost",
      },
      style: {
        width: 18,
        height: 18,
      },
    },
    {
      variants: {
        size: "medium",
        variant: "ghost",
      },
      style: {
        width: 24,
        height: 24,
      },
    },
    {
      variants: {
        size: "large",
        variant: "ghost",
      },
      style: {
        width: 30,
        height: 30,
      },
    },
  ],
});
