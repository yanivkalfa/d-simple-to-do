import uuidv4 from 'uuid/v4';
import sha256 from 'js-sha256';

export function generateUniqueId(idsCollection = []) {
  const newId = sha256(uuidv4());
  const found = idsCollection.find((item) => item.id === newId );

  if ( !found ) {
    return newId;
  }

  return generateUniqueId(idsCollection);
}


export function AnotherFunc(idsCollection) {
  const newId = uuidv4();
  const found = idsCollection.find((item) => item.id === newId );

  if ( !found ) {
    return newId;
  }

  return generateUniqueId(idsCollection);
}