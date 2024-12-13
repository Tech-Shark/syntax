## Dev Notes

- When creating any data structure using the BTreeMap, if there's going to be a candid query to get all elements (as an array of elements), and the elements are going to be "objects" (or structs), you would have to mark the value of the keys as optional in your struct `{key: Option<AnElementStruct>}` . If not, you would get an error from the candid ui when you make a query and it returns an empty vector (most likely when you haven't inserted any data yet).
  Also, don't forget to update the candid file and make the changed fields as optional also.

Experimentally: You could just explicitly return an empty vector if the array returned from the tree is empty.
