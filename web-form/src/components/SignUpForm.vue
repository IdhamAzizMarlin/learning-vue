<template>
  <div class="sign-up">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Email :</label>
        <input
          type="email"
          v-model="email"
          :class="{ 'has-error': emailBool }"
          @keyup="validationEmail"
        />
        <div class="invalid-feedback">
          <p>{{ emailError }}</p>
        </div>
      </div>
      <div class="form-group">
        <label>Password :</label>
        <input
          type="password"
          v-model="password"
          :class="{ 'has-error': passwordBool }"
          @keyup="validationPassword"
        />
        <div class="invalid-feedback">
          <p>{{ passwordError }}</p>
        </div>
      </div>
      <div class="form-group">
        <label>Role :</label>
        <select
          v-model="role"
          :class="{ 'has-error': roleBool }"
          @change="validationRole"
        >
          <option value="">-- Select Role --</option>
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
        </select>
        <div class="invalid-feedback">
          <p>{{ roleError }}</p>
        </div>
      </div>
      <div class="form-group">
        <label>Skills :</label>
        <input type="text" v-model="tempSkill" @keyup="addSkill" />
      </div>
      <div
        v-for="skill in skills"
        :key="skill"
        class="pill"
        @click="deleteSkill(skill)"
      >
        {{ skill }}
      </div>
      <div class="form-check">
        <input type="checkbox" v-model="terms" @change="validationTerms" />
        <label :class="{ 'has-error': termsBool }"
          >Accept term and conditions</label
        >
      </div>
      <button type="submit" class="submit">Create an Account</button>
      <button type="button" class="reset" @click="resetForm">Reset</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [],
      emailError: "",
      emailBool: false,
      passwordError: "",
      passwordBool: false,
      roleError: "",
      roleBool: false,
      termsError: "",
      termsBool: false,
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        let newSkill = this.tempSkill.replace(",", "");
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(newSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      const id = this.skills.indexOf(skill);
      this.skills.splice(id, 1);
    },
    validationEmail() {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (this.email === "") {
        this.emailError = "Please enter email";
        this.emailBool = true;
        return true;
      } else if (!regex.test(this.email)) {
        this.emailError = "Please enter valid email address";
        this.emailBool = true;
        return true;
      }
      this.emailError = "";
      this.emailBool = false;
      return false;
    },
    validationPassword() {
      if (this.password.length <= 5) {
        this.passwordError = "Password must be at least 6 chars long";
        this.passwordBool = true;
        return true;
      }
      this.passwordError = "";
      this.passwordBool = false;
      return false;
    },
    validationRole() {
      if (this.role === "") {
        this.roleError = "Please select role";
        this.roleBool = true;
        return true;
      }
      this.roleError = "";
      this.roleBool = false;
      return false;
    },
    validationTerms() {
      if (!this.terms) {
        this.termsBool = true;
        return true;
      }
      this.termsBool = false;
      return false;
    },
    handleSubmit() {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (this.email === "") {
        this.emailError = "Please enter email";
        this.emailBool = true;
      } else if (!regex.test(this.email)) {
        this.emailError = "Please enter valid email address";
        this.emailBool = true;
      }

      if (this.password.length <= 5) {
        this.passwordError = "Password must be at least 6 chars long";
        this.passwordBool = true;
      }

      if (this.role === "") {
        this.roleError = "Please select role";
        this.roleBool = true;
      }

      if (!this.terms) {
        this.termsBool = true;
      }

      if (
        !this.emailBool &&
        !this.passwordBool &&
        !this.roleBool &&
        !this.termsBool
      ) {
        console.log("email : ", this.email);
        console.log("password : ", this.password);
        console.log("role : ", this.role);
        console.log("skills : ", this.skills);
        console.log("terms accepted : ", this.terms);
      }
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.role = "";
      this.terms = false;
      while (this.skills.length > 0) {
        this.skills.pop();
      }
    },
  },
};
</script>

<style>
.sign-up {
  max-width: 500px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}
.sign-up h2 {
  text-align: center;
  font-size: 1.6em;
  font-weight: bold;
}
.sign-up label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.sign-up input,
.sign-up select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.sign-up input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.sign-up input:focus {
  outline: none !important;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px #719ece;
}
.sign-up .pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.sign-up .pill:hover {
  background: #fc4242;
  color: #fff;
}

.sign-up button {
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  cursor: pointer;
}

.sign-up button.submit {
  background: #0b6dff;
  color: #fff;
  margin-right: 10px;
}
.sign-up button.reset {
  background: #ccc;
  color: #fff;
  margin-right: 10px;
}
.sign-up input.has-error,
.sign-up select.has-error {
  border: 1px solid #eb1c38 !important;
}
.sign-up label.has-error {
  color: #eb1c38;
}
.invalid-feedback p {
  color: #eb1c38;
  font-weight: bold;
  font-size: 0.8em;
  margin-top: 5px;
}
</style>
