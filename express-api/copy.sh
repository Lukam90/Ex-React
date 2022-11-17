date=`date +"%H.%M"`
name="Express"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp *.js* $target

echo "Copie $name - $date"