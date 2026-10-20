// The supplied component uses only a fixed utility list and an optional class.
export const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");
