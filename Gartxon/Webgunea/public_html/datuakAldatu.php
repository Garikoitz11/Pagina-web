<?php
    //session_start();
    $GureErabiltzaile = $_GET["Erabiltzailea"];

    $conexion = mysqli_connect("db", "admin", "test", "database");
    $erabiltzaile = "SELECT * FROM Erregistroa WHERE Erabiltzailea = '$GureErabiltzaile'"; 
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Gartxon S.L.</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width", user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0>
        <link rel="stylesheet" type="text/css" href="CSS/estilo.css">
        <script src="js/formulario.js"></script>
    </head>
    <body>
        <div class="container-table">
            <div class="table__title">Nahi dituzun datuak aldatu</div>
            <div class="table__header">Erabiltzailea</div>
            <div class="table__header">Izena</div>
            <div class="table__header">Abizena</div>
            <div class="table__header">Posta kodea</div>
            <div class="table__header">NAN</div>
            <div class="table__header">Jaiotza data</div>
            <div class="table__header">Pasahitza</div>
            <div class="table__header">Posta elektronikoa</div>
            <div class="table__header">Mugikorra</div>

            <?php $emaitza = mysqli_query($conexion, $erabiltzaile);
                while($row=mysqli_fetch_assoc($emaitza)){?>

            <form name = "addForm" action="datuakErregistratu.php" class="formulario" id="formulario" method="post">

				<legend class= "registrar" style="font-size: 24px;"><strong></strong></legend>
				<br>

            <div class="table__item" value="erabiltzaile"><?php echo $row["Erabiltzailea"];?></div>

			<!-- Grupo: izena -->
			<div class="formulario__grupo" id="grupo__nombre">
				<label for="nombre" class="formulario__label">Izena</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="izena" id="nombre" value="<?php echo $row["Izena"];?>">
				</div>
			</div>

			<!-- Grupo: abizena-->
			<div class="formulario__grupo" id="grupo__abizena">
				<label for="abizena" class="formulario__label">Abizena</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="abizena" id="abizena" value="<?php echo $row["Abizenak"];?>">
				</div>
			</div>

			<!-- Grupo: posta-kodea -->
			<div class="formulario__grupo" id="grupo__codigoPostal">
				<label for="codigoPostal" class="formulario__label">Posta-kodea</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="posta-kodea" id="codigoPostal" value="<?php echo $row["PostaKodea"];?>">
				</div>
			</div>


			<!-- Grupo: NAN-->
			<div class="formulario__grupo" id="grupo__NAN">
				<label for="NAN" class="formulario__label">NAN</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="NAN" id="NAN" onclick="averigua()" value="<?php echo $row["NAN"];?>">
					<i class="formulario__validacion-estado fas fa-times-circle"></i> 
				</div>
			</div>

			
			<!-- Grupo: JaiotzaData-->
        	<div class="formulario__grupo" id="grupo__JaiotzaData">
           		 <label for="JaiotzaData" class="formulario__label">Jaiotza Data</label>
           		 <div class="formulario__grupo-input">
               		 <input type="date" class="formulario__input" name="JaiotzaData" id="JaiotzaData" value="<?php echo $row["JaiotzaData"];?>">
               		 <i class="formulario__validacion-estado fas fa-times-circle"></i> 
           		 </div>
        	</div>

			<!-- Grupo: pasahitza -->
			<div class="formulario__grupo" id="grupo__password">
				<label for="password" class="formulario__label">Pasahitza</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="pasahitza" id="password" value="<?php echo $row["Pasahitza"];?>">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
					<span id = "message1" style="color:red"> </span>
				</div>
			</div>

            <!-- Grupo: pasahitza -->
			<div class="formulario__grupo" id="grupo__password">
				<label for="password" class="formulario__label">Pasahitza</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="pasahitza2" id="password" value="<?php echo $row["Pasahitza"];?>">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
					<span id = "message1" style="color:red"> </span>
				</div>
			</div>

			<!-- Grupo: postaElektronikoa -->
			<div class="formulario__grupo" id="grupo__correo">
				<label for="correo" class="formulario__label">Posta Elektronikoa</label>
				<div class="formulario__grupo-input">
					<input type="email" class="formulario__input" name="postaElektronikoa" id="correo" value="<?php echo $row["PostaElektronikoa"];?>">
				</div>
			</div>

			<!-- Grupo: mugikorra -->
			<div class="formulario__grupo" id="grupo__telefono">
				<label for="telefono" class="formulario__label">Mugikorra</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="mugikorra" id="telefono" value="<?php echo $row["Mugikorra"];?>">
				</div>
			</div>
			
			<!-- Boton Enviar-->
			<div class="formulario__grupo formulario__grupo-btn-enviar">
				<button type="button" onclick= "validarFormulario();" class="formulario__btn" value="Registrarse">Datuak aldatu</button>
			</div>   

		</form>
            <?php } mysqli_free_result($emaitza);?>
        </div>
    </body>
</html>