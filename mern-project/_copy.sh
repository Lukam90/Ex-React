date=`date +"%H.%M"`
filename="MERN"

target="$HOME/Téléchargements/Copies/CP-$filename-$date"

mkdir -p $target

cp *.* $target

cp -r models $target

echo "Copie $filename - $date"