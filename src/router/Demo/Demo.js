var demo = {
  name: 'demo',
  data () {
    return {
    msg: 'My first demo!!!',
    newPerson: {
      name: '',
      age: 0,
      sex: 'Male'
    },
    people: [{
      name: 'Jack',
      age: 30,
      sex: 'Male'
    }, {
      name: 'Bill',
      age: 26,
      sex: 'Male'
    }, {
      name: 'Tracy',
      age: 22,
      sex: 'Female'
    }, {
      name: 'Chris',
      age: 36,
      sex: 'Male'
    }]
    }
  },
  methods: {
    createPerson: function () {
    this.people.push(this.newPerson)
    this.newPerson = {
      name: '',
      age: 0,
      sex: 'Male'
    }
    },
    deletePerson: function (index) {
    this.people.splice(index, 1)
    }
  }
};

export default demo;