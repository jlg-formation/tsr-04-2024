export const querySelector = (selector: string): HTMLElement => {
  const elt = document.querySelector<HTMLElement>(selector);
  if (elt === null) {
    throw new Error(`Cannot find selector ${selector}`);
  }
  return elt;
};
