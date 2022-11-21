date=`date +"%H.%M"`
name="Mongo"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp -r . $target

echo "Copie $name - $date"