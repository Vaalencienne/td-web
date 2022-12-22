<?php
$data=yaml_parse_file("yaml/accueil.yaml");
echo '<p>'.$data['Prenom'].' '.$data['Nom'].'</p>';
echo '<h1>'$data['Acroche'].'</h1>';
echo '<h3>'$data['Citation'].'</h3>';
?>