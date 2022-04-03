export const prettyJSON = (obj) => {
  return JSON.stringify(obj, null, 2);
}

export default {
  prettyJSON,
}
