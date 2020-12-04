// Remove data-tests in production
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
};