<?php
$server_name="46.4.103.37";
$db_name="bare_data";
$user_name="bare";
$password="Bare4451";



 try{
 $db=new PDO("mysql:host=$server_name;db_name=$db_name",$user_name,$password);
    $db->exec('SET NAMES utf8');
    if ($db){
        echo "succses";
  }

}
catch(PDOException $e){
echo 'error'.$e->getMessage();
}


$query="SELECT * FROM `animation`";
$r = $db->query($query);
if ($r->rowCount()>0){
$temp_array=array();
while ($row[]=$r->fetch())
{$temp_array=$row;
    $json=json_encode($temp_array);
}
}
else{
    echo 'error';
}
echo $json;
?>