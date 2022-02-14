<template>
  <div class="div">
    <div class="sidenav">
      <div class="login-main-text">
          <router-link class="navbar-brand" to="/login">Login</router-link>
          <br />or<br />
          <router-link class="navbar-brand" to="/signup">Register</router-link>
      </div>
    </div>
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>
