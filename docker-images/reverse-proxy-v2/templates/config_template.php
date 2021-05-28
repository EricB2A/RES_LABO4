<?php
$expressIp = getenv("DYNAMIC_APP_IP");
$apacheIp = getenv("STATIC_APP_IP");
?>

<VirtualHost *:80>

ServerName poubel.le

# Serveur API 
ProxyPass '/api/posts/' 'http://<?php print "$expressIp";?> /'
ProxyPassReverse '/api/posts/' 'http://<?php print "$expressIp";?>/'

# Serveur frontend
ProxyPass '/' 'http://<?php print "$apacheIp"?>/'
ProxyPassReverse '/' 'http://<?php print "$apacheIp"?>/'    
ServerAdmin webpoubelle@localhost

</VirtualHost>

