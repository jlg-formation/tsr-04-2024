type Class<T> = new () => T;

export const querySelector = <T extends HTMLElement>(
  selector: string,
  type?: Class<T>,
): T => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannot find selector ${selector}`);
  }
  if (type !== undefined && !(elt instanceof type)) {
    throw new Error(`Selector ${selector} is not of type ${type.name}`);
  }
  return elt as T;
};
