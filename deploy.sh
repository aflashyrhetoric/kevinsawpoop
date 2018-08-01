echo "Building...\n"
vue build;

echo "Copying redirects...\n"
cp _redirects dist/_redirects;

echo "Committing to git\n"
git add -A;
git commit -m "Quick deploy";
git push origin master;

echo "\n ------> Done."
