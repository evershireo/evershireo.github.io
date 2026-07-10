// Components.d.ts — the complete catalog of the 17 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.BigData) and usable directly in JSX.
import * as React from 'react';

// figma layer: "big data" (node 32:309)
export interface BigDataProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "button" (node 32:107)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "m";
  state?: "default" | "hover" | "disabled" | "focus" | "active";
  colorScheme?: "accent";
  variant?: "primary" | "outline";
  /** Text content; defaults to "Button label". */
  text1?: string;
}

// figma layer: "calendar" (node 32:135)
export interface CalendarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "cards category" (node 32:457)
export interface CardsCategoryProps {
  className?: string;
  style?: React.CSSProperties;
  name?: "big data" | "network" | "cybersecurity" | "development" | "projects" | "it" | "design";
  size?: "l" | "m" | "s";
  state?: "hover" | "default";
  /** Text content; defaults to "Технологии Big Data". */
  text1?: string;
  /** Text content; defaults to "10 мероприятий". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "cybersecurity" (node 32:396)
export interface CybersecurityProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "design" (node 32:449)
export interface DesignProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "development" (node 32:424)
export interface DevelopmentProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "ellipsis-vertical" (node 32:169)
export interface EllipsisVerticalProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "ellipsis-vertical" (node 32:172)
export interface EllipsisVertical2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Focus Layer" (node 32:103)
export interface FocusLayerProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "soft" | "contrast";
}

// figma layer: "google" (node 32:25)
export interface GoogleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "header" (node 32:36)
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover";
  /** Text content; defaults to "Главная". */
  text1?: string;
  /** Text content; defaults to "Мероприятия". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "network" (node 32:356)
export interface NetworkProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "profile" (node 32:29)
export interface ProfileProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Пример" (node 32:627)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "solar:fire-bold" (node 32:149)
export interface SolarFireBoldProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Tag" (node 32:153)
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  name?: "роль" | "контест" | "курс" | "хит" | "новинки" | "search tag";
  state?: "default" | "hover";
  /** Text content; defaults to "Tag label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

declare const BigData: React.FC<BigDataProps>;
declare const Button: React.FC<ButtonProps>;
declare const Calendar: React.FC<CalendarProps>;
declare const CardsCategory: React.FC<CardsCategoryProps>;
declare const Cybersecurity: React.FC<CybersecurityProps>;
declare const Design: React.FC<DesignProps>;
declare const Development: React.FC<DevelopmentProps>;
declare const EllipsisVertical: React.FC<EllipsisVerticalProps>;
declare const EllipsisVertical2: React.FC<EllipsisVertical2Props>;
declare const FocusLayer: React.FC<FocusLayerProps>;
declare const Google: React.FC<GoogleProps>;
declare const Header: React.FC<HeaderProps>;
declare const Network: React.FC<NetworkProps>;
declare const Profile: React.FC<ProfileProps>;
declare const Screen: React.FC<ScreenProps>;
declare const SolarFireBold: React.FC<SolarFireBoldProps>;
declare const Tag: React.FC<TagProps>;
declare global {
  interface Window {
    BigData: React.FC<BigDataProps>;
    Button: React.FC<ButtonProps>;
    Calendar: React.FC<CalendarProps>;
    CardsCategory: React.FC<CardsCategoryProps>;
    Cybersecurity: React.FC<CybersecurityProps>;
    Design: React.FC<DesignProps>;
    Development: React.FC<DevelopmentProps>;
    EllipsisVertical: React.FC<EllipsisVerticalProps>;
    EllipsisVertical2: React.FC<EllipsisVertical2Props>;
    FocusLayer: React.FC<FocusLayerProps>;
    Google: React.FC<GoogleProps>;
    Header: React.FC<HeaderProps>;
    Network: React.FC<NetworkProps>;
    Profile: React.FC<ProfileProps>;
    Screen: React.FC<ScreenProps>;
    SolarFireBold: React.FC<SolarFireBoldProps>;
    Tag: React.FC<TagProps>;
  }
}
