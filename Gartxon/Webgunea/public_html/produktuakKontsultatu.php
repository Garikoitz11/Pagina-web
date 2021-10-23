<?php
    $conexion = mysqli_connect("db", "admin", "test", "database");
    mysqli_set_charset($conexion, "utf8");
    $erabiltzaile = "SELECT Kodea, Izena, Prezioa FROM Produktuak"; 

    //session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Gartxon S.L</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width", user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0>
        <link rel="stylesheet" type="text/css" href="./CSS/produktuak.css">
    </head>
    <body>
        <div class="container-table">
            <div class="table__title">Erabiltzaileen produktuak</div>
            <div class="table__header">Izena</div>
            <div class="table__header">Prezioa</div>
            <div class="table__header"></div>
            <?php $emaitza = mysqli_query($conexion, $erabiltzaile);
            while($row=mysqli_fetch_assoc($emaitza)){?>
            <div class="table__item"><?php echo $row["Izena"];?></div>
            <div class="table__item"><?php echo $row["Prezioa"];?></div>
            <div class="table__item"><a href='produktuOsoa.php?kodea=<?php echo $row["Kodea"];?>'>Informazio gehiago</a></div>
            <?php } mysqli_free_result($emaitza);?>
        </div>
    </body>
</html>