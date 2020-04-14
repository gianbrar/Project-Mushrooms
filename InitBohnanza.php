<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <form action="InitBohnanza.php" method="get">
        <label for="uName">NAME:</label><br>
        <input type="text" id="uName" name="uName"><br>
        <input type="submit" value="Enter">
    </form>
    <?php 
        if ($_GET["uName"] == "") {
            echo "Test!"
        } else {
            echo "another test
        }
    ?>
</body>
</html>