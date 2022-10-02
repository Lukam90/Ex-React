date=`date +"%H.%M"`
name="DE"

target="~/Téléchargements/Copies/CP-$name-$date"

cp -r . $target

echo "Copie de $name - $date"