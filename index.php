<?php
$conexion = new mysqli("localhost", "root", "", "juegos");
if ($conexion->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $conexion->connect_errno . ") " . $conexion->connect_error;
}else{
  $resultado = $conexion->query("SELECT * FROM usuarios WHERE id=1");
}
 ?>
 <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="./css/Pintar.css">
  </head>
  <body>
    <?php include "./assets/menu.php"; ?>
    <div class="info">
      <table>
        <tr>
          <th> <h4> ID</h4></th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Edad</th>
          <th>Curso</th>
          <th>Puntuacion</th>
        </tr>
        <?php
          foreach ($resultado as $usuarios) {
            echo "<tr>";
            echo "<td class='info'>".$usuarios['id']."</td>";
            echo "<td class='info'>".$usuarios['nombre']."</td>";
            echo "<td class='info'>".$usuarios['apellidos']."</td>";
            echo "<td class='info'>".$usuarios['edad']."</td>";
            echo "<td class='info'>".$usuarios['curso']."</td>";
            echo "<td class='info'>".$usuarios['puntuacion']."</td>";
            echo "</tr>";
          }
        ?>
      </table>
    </div>
    <script type="text/javascript" src="./js/Pintar.js"></script>
  </body>
</html>
