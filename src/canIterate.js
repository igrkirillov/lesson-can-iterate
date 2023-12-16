export default function canIterate(object) {
  return !!object && !!object[Symbol.iterator];
}