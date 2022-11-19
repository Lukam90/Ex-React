date=`date +"%H.%M"`
name="Gatsby"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp *.js* $target

cp -r src $target
cp -r static $target

echo "Copie $name - $date"