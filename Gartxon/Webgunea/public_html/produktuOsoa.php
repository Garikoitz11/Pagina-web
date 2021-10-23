<?php
    //session_start();
    $ProduktuKode = $_GET["kodea"];

    $conexion = mysqli_connect("db", "admin", "test", "database");
    $erabiltzaile = "SELECT * FROM Produktuak WHERE Kodea = '$ProduktuKode'"; 
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Gartxon S.L</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width", user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0>
        <link rel="stylesheet" type="text/css" href="./CSS/produktuOsoa.css">
    </head>
    <body>
        <div class="container-table">
            <div class="table__title">Erabiltzaileen produktuak</div>
            <div class="table__header">Kodea</div>
            <div class="table__header">Izena</div>
            <div class="table__header">Mota</div>
            <div class="table__header">Deskribapena</div>
            <div class="table__header">Prezioa</div>
            <div class="table__header"></div>
            <div class="table__header"></div>
            <?php $emaitza = mysqli_query($conexion, $erabiltzaile);
            while($row=mysqli_fetch_assoc($emaitza)){?>
            <div class="table__item"><?php echo $row["Kodea"];?></div>
            <div class="table__item"><?php echo $row["Izena"];?></div>
            <div class="table__item"><?php echo $row["Mota"];?></div>
            <div class="table__item"><?php echo $row["Deskribapena"];?></div>
            <div class="table__item"><?php echo $row["Prezioa"];?></div>
            <?php } mysqli_free_result($emaitza);?>
        </div>
    </body>
</html>