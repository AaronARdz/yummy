<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <h1>Iniciar sesion</h1><br>
        <form>
            <div class="form-group">
                <label for="username">Correo Electronico</label>
                <input class="sizebox form-control" type="text" placeholder="Ingresa tu correo">

                <label for="password">Nombre de usuario</label>
                <input class="sizebox form-control" type="password" placeholder="Ingresa tu contraseña">
                <br>
                <input class="btntype" type="submit" value="Iniciar sesion"><br> 
                <input class="btntypef" type="submit" value="Iniciar sesion con Facebook"><br>
                <input class="btntypeg" type="submit" value="Iniciar sesion con Gmail"><br><br><br>       
            </div>
           
        </form>
      </div>
      <div class="col">
        <h1>Registro de Usuario</h1>
        <form>
            <div class="form-group">
                <label for="username">Nombre cliente</label><br>
                <input class="sizebox form-control" type="text" placeholder="Ingresa tus datos">
                <label for="direccion">Direccion</label><br>
                <input class="sizebox form-control" type="text" placeholder="Ingresa direccion para envios">
                <label for="email">Correo electronico</label><br>
                <input class="sizebox form-control" type="email" placeholder="Ingresa tu correo">
                <label for="email2">Confirmacion correo electronico</label><br>
                <input class="sizebox form-control" type="email" placeholder="Confirma tu correo">
                <label for="password">Contraseña</label><br>
                <input class="sizebox form-control" type="password" placeholder="Ingresa tu contraseña">
                <label for="password2">Confirmacion de contraseña</label><br>
                <input class="sizebox form-control" type="password" placeholder="Confirma tu contraseña">
                <br>
               <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">Masculino</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2">Femenino</label>
                </div>
                <br><br>
                <label for="fechanacimiento">Fecha de nacimiento</label>
                <input type="date">
                <input class="btntype" type="submit" value="Registrarse"><br><br>
            </div>
         
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
  color: #d9a371;
}
.text-aqua p {
  color: var(--aqua) !important;
}
.sizebox{
  width: 450px;
}
.btntype{
  width: 250px;
  border-radius: 30px;
  background: #d9a371;
  color: white;
}
.btntypef{
  width: 250px;
  border-radius: 30px;
  background: blue;
  color: white;
}
.btntypeg{
  width: 250px;
  border-radius: 30px;
  background: red;
  color: white;
  margin-top: 10px;
}

p{
  text-align:left;
  margin-right: 0px;
  margin-bottom: 100px;
}
.form-group label {
    margin-right: auto!important;
}
input, textarea {
    padding: 10px 10px!important;
    margin: 2px 0;
    font-size: .9em;
}
</style>