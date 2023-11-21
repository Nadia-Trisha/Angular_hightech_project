<?php 
include('db_con.php');
$course = [];

$sql = "SELECT * FROM  service_list";
if($result = $db->query($sql))
{
    $i = 0;
    while($row = $result->fetch_assoc())
    {
        $course[$i]['id'] = $row['id'];
        $course[$i]['name'] = $row['name'];
        $course[$i]['description'] = $row['description'];
        $course[$i]['image_path'] = $row['image_path'];
        $course[$i]['status'] = $row['status'];
        $course[$i]['created_at'] = $row['created_at'];
        $course[$i]['updated_at'] = $row['updated_at'];
        $course[$i]['icon'] = $row['icon'];
        $i++;
    }
    echo json_encode(['data' => $course]);
}
else
{
    http_response_code(404);
}

?>