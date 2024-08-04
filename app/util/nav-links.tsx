export interface NavLinks {
  path: string;
  label: string;
}

export const paths = [
  { path: "/", label: "Design" },
  { path: "/photos", label: "Photos" },
] as NavLinks[];
