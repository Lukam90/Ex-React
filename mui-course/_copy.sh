date=`date +"%H.%M"`
name="MUI"
target="$HOME/Téléchargements/Copies/CP-$name-$date"

if [ ! -d $target ]; then
    mkdir $target

    cp *.json $target

    cp -r public $target
    cp -r src $target
fi

echo "Copie du dossier $name - $date"