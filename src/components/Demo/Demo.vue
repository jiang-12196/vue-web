<template>
  <div class="demo">
    <fieldset>
      <legend>
        Create new person
      </legend>
      <div class="form-group">
        <label>Name: </label>
        <input type="text" v-model="newPerson.name" />
      </div>
      <div class="form-group">
        <label>Age: </label>
        <input type="text" v-model="newPerson.age" />
      </div>
      <div class="form-group">
        <label>Sex: </label>
        <select id="" name="" v-model="newPerson.sex">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label></label>
        <button @click="createPerson">Create</button>
      </div>
    </fieldset>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="(person, index) in people">
         <td>{{ person.name }}</td>
         <td>{{ person.age }}</td>
         <td>{{ person.sex }}</td>
         <td :class="'text-center'">
           <button @click="deletePerson(index)">Delete</button>
         </td>         
       </tr>
      </tbody>
    </table>

  </div>
</template>

<script src="./Demo.js" />
<style scoped src="./Demo.css"></style>
