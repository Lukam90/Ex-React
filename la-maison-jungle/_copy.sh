date=`date +"%H.%M"`
name="DE"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp -r src $target

echo "Copie de $name - $date"