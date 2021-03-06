<?php
session_start ();
$db = new PDO ( 'sqlite:../database.db' );
$pollid = $_GET ['poll'];

$stmt = $db->prepare ( 'SELECT * FROM poll WHERE pollId = ?' );
$stmt->execute ( array (
		$pollid 
) );
$poll = $stmt->fetchObject ();

$creator = $poll->creatorId == $_SESSION ['userId'];
if (! $creator) {
	header ( 'Location: ../../');
	return false;
}
$stmt = $db->prepare ( 'DELETE FROM poll WHERE pollId = ?' );
$stmt->execute ( array (
		$pollid 
) );
$stmt = $db->prepare ( 'DELETE FROM question WHERE pollId = ?' );
$stmt->execute ( array (
		$pollid 
) );
$stmt = $db->prepare ( 'DELETE FROM answer WHERE pollId = ?' );
$stmt->execute ( array (
		$pollid 
) );
header ( 'Location: ../../');
?>