export const dispatchHelper = (type, payload = {}, ...rest) => ({
  type,
  payload,
  ...rest
});
