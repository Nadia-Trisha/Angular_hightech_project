<?php 
include_once('db_con.php');

$postdata = file_get_contents("php://input");
$result = json_decode($postdata);

if(isset($result->fullname) && isset($result->email) && isset($result->contact)&& isset($result->message)){



$fullname = $result->fullname;
$contact = $result->contact;
$email = $result->email;
// $project = $result->project;
$message = $result->message;

$db->query("INSERT INTO inquiry_list VALUES(NULL,'$fullname', '$contact', '$email' ,'$message', '', now(), '' )");

if($db->affected_rows>0){
echo json_encode(['status'=>"Successfully Inserted"]);
}

}else {
    echo json_encode(['status'=>"No fields can be blank"]);
}



?>