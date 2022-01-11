<!Doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Seach Results | Afrizonmall</title>
</head>
<body>
<div class="card-body">
                        <div class="row">
                            <div class="col-md-7">

                                <form action="" method="GET">
                                    <div class="input-group mb-3">
                                        <input type="text" name="srch" required value="<?php if(isset($_GET['sarch'])){echo $_GET['sarch']; } ?>" class="form-control" placeholder="Search data">
                                        <button type="submit" class="btn btn-primary">Search</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
<div class="col-md-12">
                <div class="card mt-4">
                    <div class="card-body">
						<br>
						<br>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Brand Name</th>
                                    <th>Price</th>
                                    <th>Date of Entry</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php 
                                    $conn = mysqli_connect("localhost","root","","search_data");

                                    if(isset($_GET['srch']))
                                    {
                                        $filtervalues = $_GET['srch'];
                                        $query = "SELECT * FROM t-shirts WHERE CONCAT(Brand_Name,Price,Date_of_Entry) LIKE '%$filtervalues%' ";
                                        $query_run = mysqli_query($conn, $query);

                                        if(!$query_run)
                                        {
                                            ?>
                                                <tr>
                                                    <td colspan="4">No Record Found</td>
                                                </tr>
                                            <?php
                                        }
                                        else (mysqli_num_rows($query_run) != 0)
                                        {
                                            foreach($query_run as $items)
                                            {
                                                ?>
                                                <tr>
                                                    <td><?= $items['ID_Num']; ?></td>
                                                    <td><?= $items['Brand_Name']; ?></td>
                                                    <td><?= $items['Price']; ?></td>
                                                    <td><?= $items['Date_of_Entry']; ?></td>
                                                </tr>
                                                <?php
                                            }
                                        }
                                        
                                    }
                                ?>
                            </tbody>
                        </table>
						<hr>
                    </div>
                </div>
            </div>

    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>