export const people = [
  {
    id: 0,
    name: "Seoyul",
    age: 27,
    gender: "female"
  },
  {
    id: 1,
    name: "hello",
    age: 27,
    gender: "female"
  },
  {
    id: 2,
    name: "my",
    age: 27,
    gender: "female"
  },
  {
    id: 3,
    name: "name",
    age: 27,
    gender: "female"
  },
  {
    id: 4,
    name: "is",
    age: 27,
    gender: "female"
  },
  {
    id: 5,
    name: "Seoyul",
    age: 27,
    gender: "female"
  }
]

export const getById = id => {
  const filterPeople = people.filter(person => person.id === id)
  return filterPeople[0]
}
