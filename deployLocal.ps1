

$prod_group = "hqapp";
$prod_asp_web = "getsleekprod-web-asp";
$prod_app_website = "getsleekprodwebsite";



npm install
powershell ./clean.ps1
npm run build
Compress-Archive -Path public/* -DestinationPath public/hqappwebsite.zip
powershell ./deploy.ps1
az webapp deployment source config-zip -g $prod_group -n $prod_app_website --src "public/hqappwebsite.zip"