import uuidv4 from 'uuid/v4';

export function generateUniqueId(idsCollection) {
  const newId = uuidv4();
  const found = idsCollection.find((item) => item.id === newId );

  if ( !found ) {
    return newId;
  }

  return generateUniqueId(idsCollection);
}
