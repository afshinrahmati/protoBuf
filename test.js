// protoc --proto_path=src/ --js_out=import_style=commonjs,binary:src/.  src/Person.proto
const proto = require("./src/Person_pb");


const person = new proto.Person();
person.setName("Afshin")
person.setId(123);
person.setEmail("test@afshin.com");


console.log(person.getName()); // AFshin
const serializedData = person.serializeBinary();
console.log(serializedData);// ==> //Uint8Array(27) [
//     10,   6,  65, 102, 115, 104, 105,
//    110,  16, 123,  26,  15, 116, 101,
//    115, 116,  64,  97, 102, 115, 104,
//    105, 110,  46,  99, 111, 109
//  ]
const deserializedPerson = proto.Person.deserializeBinary(serializedData);
console.log(deserializedPerson); // ==> //
// {
//     wrappers_: null,
//     messageId_: undefined,
//     arrayIndexOffset_: -1,
//     array: [ 'Afshin', 123, 'test@afshin.com' ],
//     pivot_: 1.7976931348623157e+308,
//     convertedPrimitiveFields_: {}
//   }
console.log(deserializedPerson.getName()); // afshin
console.log(deserializedPerson.getId());   // Output: 123
console.log(deserializedPerson.getEmail());// test@afshin.com


