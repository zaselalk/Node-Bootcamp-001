// let company = "ABD";

// const Account = {
//   id: "0012",
//   owner: "Amal",
//   getName: function () {
//     return this.owner;
//   },
// };

const Person = {
  firstName: "Nuwan",
  lastName: "Dasanayaka",
  birthday: "2020-09-31",
  address: {
    city: "Mathugama",
    district: "Kalutara",
  },
  posts: [
    {
      title: "Today is My Birthday",
      likeCount: 12,
    },
    {
      title: "I went a trip",
      likeCount: 12,
    },
    {
      title: "Today is My Best Friend Birthday!",
      likeCount: 12,
    },
  ],
  getFullName: function () {
    return this.firstName + " " + this.lastName + company;
  },
};

// const school = {};
// const school2 = new Object();

// school.name = "CSM";
// school.district = "Kalutara";

console.log(Person.address.district);
// console.log(Account.getName());
