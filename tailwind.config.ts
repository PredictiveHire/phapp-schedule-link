import type { Config } from "tailwindcss"

import theme from "./src/config/theme.json"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sapia-pink": "#FFCEFF",
        primary: {
          DEFAULT: theme.token.colorPrimary,
          bg: theme.token.colorPrimaryBg,
          "bg-hover": theme.token.colorPrimaryBg,
          border: theme.token.colorPrimaryBorder,
          "border-hover": theme.token.colorPrimaryBorderHover,
          hover: theme.token.colorPrimaryHover,
          text: theme.token.colorPrimaryText,
        },
        success: {
          DEFAULT: theme.token.colorSuccess,
          bg: theme.token.colorSuccessBg,
          secondary: "#7ED322",
        },
        warning: {
          DEFAULT: theme.token.colorWarning,
          border: theme.token.colorWarningBorder,
          secondary: "#FF9932",
          icon: "#FFCF55",
        },
        danger: {
          secondary: "#EB2746",
        },
        error: {
          DEFAULT: theme.token.colorError,
          bg: theme.token.colorErrorBg,
        },
        info: {
          DEFAULT: theme.token.colorInfo,
          bg: theme.token.colorInfoBg,
        },
        border: {
          DEFAULT: theme.token.colorBorder,
          secondary: theme.token.colorBorderSecondary,
          tertiary: theme.token.colorBorderTertiary,
        },
        text: {
          secondary: theme.token.colorTextSecondary,
          tertiary: theme.token.colorTextTertiary,
          quaternary: theme.token.colorTextQuaternary,
          disabled: "#00000040",
        },
        th: {
          "dark-blue": "#245069",
          "light-blue": "#9ACEDC",
          gray: "#F0F0F0",
          "info-icon-gray": "#BFBFBF",
        },
        "input-primary-hover": theme.components.Input.colorPrimaryHover,
        "tooltip-title": "#262626",
        description: "#595959",
        "description-secondary": "#8c8c8c",
        "dark-grey": "#939EAB",
        "dark-blue": "#245069",
        "light-grey": "#F9F9F9",
        "light-grey-for-placeholder": "#dddddd",
        "hovering-card": "#F6F6F6",
        "filled-bar": "#B1B3B6",
        "secondary-light": "#F0F3FF",
        "company-theme": "var(--color-company-theme)",
        "linear-background-color": "#f6f7f8",
        "spinner-background": "rgba(0, 0, 0, 0.45)",
        layout: "#f8f9fb",
        "list-page": "#F6F6F6",
        placeholder: "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "linear-background": "linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);",
      },
      backgroundSize: {
        "linear-background-size": "1000px 104px",
      },
      backgroundColor: {
        disabled: "#f5f5f5",
      },
      borderColor: {
        "company-theme": "var(--color-company-theme)",
        light: "#d9d9d9",
      },
      fill: {
        "company-theme": "var(--color-company-theme)",
      },
      fontSize: {
        "12": ["12px", "14px"],
        "14": ["14px", "17px"],
        "16": ["16px", "19px"],
        "18": ["18px", "21px"],
        "20": ["20px", "24px"],
        "24": ["24px", "28px"],
      },
      fontFamily: {
        "roboto-regular": ["Roboto", "Arial", "sans-serif"],
        "roboto-700": ["Roboto-700", "Arial", "sans-serif"],
        "arial-regular": ["Arial", "sans-serif"],
        "arial-700": ["Arial", "sans-serif"],
      },
      width: {
        "logo-container": "6rem",
        "profile-details-definition": "209px",
        "ranking-banner": "74px",
        "desktop-job-requisitions-global-search": "20.75rem",
        "ci-score-button": "7.8125rem",
      },
      height: {
        "logo-container": "3rem",
        "main-layout": "calc(100% - 3rem)",
        "single-bar": "26px",
        "linear-background": "255px",
        "mobile-talent-insights": "calc(100% - 3.5rem)",
        "action-bar": "4rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "place-holder-shimmer": {
          "0%": { "background-position": "-468px 0" },
          "100%": { "background-position": "468px 0" },
        },
        "background-fade": {
          "0%": { background: theme.token.colorPrimaryBg },
          "60%": { background: theme.token.colorPrimaryBg },
          "100%": { background: "transparent" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "linear-background": "place-holder-shimmer 1s linear infinite forwards",
        "highlight-fade": "background-fade 3s ease-in-out",
      },
      gridTemplateColumns: {
        "ti-layout": "minmax(0, 4fr) minmax(0, 6fr)",
        "mobile-detail": "auto 1fr",
        "notification-export-row": "auto minmax(30%, 1fr) auto",
        "notification-export-row-action-container": "auto 1fr",
      },
      boxShadow: {
        "ph-default": "4px 4px 6px rgba(0, 0, 0, 0.4);",
        active: "4px -2px 6px -4px rgba(0, 0, 0, 0.4);",
        "input-focus": "0 0 0 2px rgba(12, 198, 255, 0.07);",
        "ci-vi-score-button": "5px 5px 10px 0px rgba(147, 147, 147, 0.20);", // CI result button width, which is from the design spec
        card: "0px 3px 10px 1px rgba(170, 170, 170, 0.20);",
      },
      minWidth: {
        "profile-item": "16px",
      },
      minHeight: {
        "profile-item": "16px",
      },
      maxHeight: {
        "main-layout": "calc(100% - 3rem)",
        "job-requisitions-list": "calc(100% - 5.75rem)",
        "job-requisitions-list-checked": "calc(100% - 5.75rem - 49px)", // 49px is the height of the job requisition action row
        "candidate-list": "calc(100% - 8rem)",
        "candidate-list-checked": "calc(100% - 8rem - 49px)", // 49px is the height of the candidate list action row
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      animationDirection: {
        "forwards-backwards": "forwards, backwards",
      },
      padding: {
        "video-16-on-9": "56.25%",
        "video-4-on-3": "75%",
        page: "50px",
        "talent-insights-bottom": "65px", // 64px (height of action bar) + 1px (action bar top border)
      },
      lineHeight: {
        none: "0",
      },
      gridTemplateRows: {
        "list-layout": "auto 1fr",
        "mobile-global-search-tab-content": "auto auto 1fr",
        "mobile-global-search-tab-content-with-hint": "auto auto 1fr auto",
      },
    },
  },
  plugins: [],
} satisfies Config
