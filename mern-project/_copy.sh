date=`date +"%H.%M"`
name="Backend"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp -r backend $target

cp *.* $target

echo "Copie de $name - $date"