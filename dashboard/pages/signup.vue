<template>
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
      <FormValidator ref="authForm">
        <form @submit.prevent="onSignUp">
          <FieldValidator
            name="email"
            rules="email|required"
            mode="lazy"
            slim
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.length > 0 }"
                placeholder="Enter your email"
                name="email"
                v-model="signUpForm.email"
              />
              <div
                v-for="(error, key) in errors"
                :key="`email-${key}`"
                v-show="errors"
                class="invalid-feedback"
              >
                {{ error }}
              </div>
            </div>
          </FieldValidator>
          <FieldValidator
            name="password"
            rules="required"
            mode="lazy"
            slim
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.length > 0 }"
                placeholder="Enter your password"
                name="password"
                v-model="signUpForm.password"
              />
              <div
                v-for="(error, key) in errors"
                :key="`password-${key}`"
                v-show="errors"
                class="invalid-feedback"
              >
                {{ error }}
              </div>
            </div>
          </FieldValidator>
          <button type="submit" class="btn btn-success">Sign Up</button>
          <div class="login-form__network-error" v-if="signUpError">
            {{ signUpError }}
          </div>
        </form>
      </FormValidator>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'LoginPage',
  layout: 'unauthorized',
  components: {
    FormValidator: ValidationObserver,
    FieldValidator: ValidationProvider,
  },
  data: () => ({
    signUpForm: {
      email: '',
      password: '',
    },
    signUpError: null,
  }),
  methods: {
    async onSignUp() {
      const isCorrect = await this.$refs.authForm.validate()
      if (isCorrect) {
        try {
          await this.$axios.post('/auth/signup', {
            email: this.signUpForm.email,
            password: this.signUpForm.password,
          })
          await this.$auth.loginWith('local', {
            data: this.signUpForm,
          })
          this.$router.push('/orders')

        } catch (err) {
          console.log(err.response)
          this.signUpError = err.response.data.message
        }
      }
    },
  },
}
</script>

<style scoped>
.login-form__network-error {
  border-radius: 6px;
  padding: 10px;
  color: white;
  background: #ff000040;
  border: 1px solid #ff000078;
  margin-top: 10px;
}
</style>
