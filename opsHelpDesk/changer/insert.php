<?php
//$mysql_real_escape_string();
echo "submit run";
//connect to database
$conn = mysqli_connect('127.0.0.1:3306','root','macedonia', 'playbookdb');

//check connection 
if(!$conn) {
echo 'Connectiion Error' . mysqli_connect_error();
};
$data = ($_POST);

foreach($_POST as $data){
	print_r($data);
	$object = json_decode($data);

	$page_title = $object->page_title;
	$teamVal = $object->team ?? "";
	$tabVal = $object->tab ?? "";
	$troubleshootingVal = $object->troubleshooting ?? "";
	$type = $object->content_type;
	$title = $object->heading ?? "";
	$textContent = $object->text_area ?? "";
	$photo = $object->photoUpload ?? "";
	$videoLink = $object->videolink ?? "";
	$sql = "INSERT INTO 'playbookdb' ('page_title', tab', 'team', 'troubleshooting', 'content_type', 'heading', 'text_area', 'photoUpload', 'alt_text','videolink')
	VALUES ('$page_title', '$tab', '$teamVal', '$troubleshootingVal', '$content_type', '$title', '$textContent', '$photo', '$videoLink')";
	
	//echo $sql;die;
	
	
	$rs = mysqli_query($conn, $sql);
	$mysqli_close();

}	

$obj = json_decode($data);
var_dump($data);
die;

if($rs)
{
	echo "Form Information Pushed";
}
?>
