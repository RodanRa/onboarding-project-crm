<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        required
        v-model="username"
      />
    </div>

    <div>
      <label for="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
        v-model="password"
      />
    </div>

    <div>
      <button type="submit">Log In</button>
    </div>
  </form>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(event) {
      // to reset the route at logout
      if (this.$route.fullPath != "/") {
        this.$router.replace("/");
      }
      Meteor.loginWithPassword(this.username, this.password);
    },
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: center;
  align-items: center;
}

.login-form > div {
  margin: 8px;
}

.login-form > div > label {
  font-weight: bold;
}

.login-form > div > input {
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px 6px;
  background: transparent;
  border: 1px solid #aaa;
  width: 100%;
  font-size: 1em;
  margin-right: 16px;
  margin-top: 4px;
}

.login-form > div > input:focus {
  outline: 0;
}

.login-form > div > button {
  background-color: #62807e;
}
</style>
