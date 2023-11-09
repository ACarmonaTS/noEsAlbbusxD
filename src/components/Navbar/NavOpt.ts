export const NavOpt = [
  { name: "INICIO", href: "/#inicio", active: true },
  { name: "SERVICIOS", href: "/#servicios", active: false },
  { name: "CONTACTO", href: "/contacto", active: false },
];

export interface Linked {
  name: string;
  href: string;
  active: boolean;
}
